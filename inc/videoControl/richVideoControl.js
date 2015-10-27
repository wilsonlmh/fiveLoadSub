/*
richVideoControl.js v0.1 (c) 2015 by Wilson Luniz @ Previous Production Macau. Licensed under the GPLv3 license
See http://github.com/wilsonlmh/richVideoControl.js/ for license and more info 
*/

var store = store || [];
if (typeof getFile != 'function') {

    function getFile(url) {
        var result = url;
        if (store.length > 0) {
            for (row of store) {
                if (row.url == url) {
                    result = row.dataUrl;
                }
            }
        }
        return result;
    }
}

var lastScriptPath = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].getAttribute('src').split('?')[0].split('/').slice(0, -1).join('/') + '/';

function richVideoControl$applyControl(t) {

    var current = {
        seeking: false,
        hideTimeout: 0,
        hideInterval: -999,
        playbackRate: 1.0,
        basePath: lastScriptPath,
    };

    //make control elements
    var control = document.createElement('div');
    control.classList.add('richVideoControl');



    var seeker = document.createElement('div');
    seeker.classList.add('richVideoControl-seeker');


    var buttons = document.createElement('div');
    buttons.classList.add('richVideoControl-buttons')

    var button = {
        playStop: document.createElement('img'),
        forward: document.createElement('img'),
        backward: document.createElement('img'),
        begin: document.createElement('img'),
        playbackRate: document.createElement('input'),
        reset: document.createElement('img')
    };

    button.playStop.src = getFile(current.basePath + 'richVideoControlIcon_play.png');
    button.forward.src = getFile(current.basePath + 'richVideoControlIcon_forward.png');
    button.backward.src = getFile(current.basePath + 'richVideoControlIcon_backward.png');
    button.begin.src = getFile(current.basePath + 'richVideoControlIcon_begin.png');
    button.reset.src = getFile(current.basePath + 'richVideoControlIcon_reset.png');
    button.playbackRate.setAttribute('type', 'text');


    button.playStop.classList.add("richVideoControl-button");
    button.forward.classList.add("richVideoControl-button");
    button.backward.classList.add("richVideoControl-button");
    button.begin.classList.add("richVideoControl-button");
    button.reset.classList.add("richVideoControl-button");
    button.playbackRate.classList.add("richVideoControl-playbackRate");


    var timeCode = document.createElement('div');
    timeCode.classList.add('richVideoControl-timeCode');

    control.appendChild(seeker);
    control.appendChild(buttons);
    control.appendChild(timeCode);
    buttons.appendChild(button.begin);
    buttons.appendChild(button.backward);
    buttons.appendChild(button.playStop);
    buttons.appendChild(button.forward);
    buttons.appendChild(button.playbackRate);
    buttons.appendChild(button.reset);

    function div(num1, num2) {
        var n1 = Math.round(num1);
        var n2 = Math.round(num2);

        var result = n1 / n2;

        if (result >= 0) {
            result = Math.floor(result);
        } else {
            result = Math.ceil(result);
        }

        return result;
    }

    //UI functions
    function resizeControl(e) {

        control.style.width = t.clientWidth + 'px';
        control.style.height = (buttons.clientHeight + seeker.clientHeight) + 'px';
        control.style.top = (t.clientTop + t.clientHeight - control.clientHeight) + 'px';
        control.style.left = t.clientLeft + 'px';
        if (control.clientWidth <= timeCode.clientWidth) {
            timeCode.style.display = 'none';
            buttons.style.width = control.clientWidth + 'px';
        } else {
            timeCode.style.display = 'inline-block';
            buttons.style.width = (control.clientWidth - timeCode.clientWidth - 11) + 'px';
        }
        setTimeout(resizeControl, 100);
    }

    //Misc/preparation functions
    function second2TimeCode(sec) {
        var ms = parseInt(((sec % 1) * 100).toString()) || 0;
        var s = Math.round(parseInt(sec.toString()) % 60) || 0;
        var m = Math.round((parseInt(sec.toString()) / 60).toString()) || 0;
        var h = div(parseInt(sec.toString()), 3600) || 0;
        return _zeroPad(h, 2) + ":" + _zeroPad(m, 2) + ":" + _zeroPad(s, 2) + "." + _zeroPad(ms, 2);
    }

    //Internal control functions
    function play() {
        if (t.duration > 0) {
            if (!t.paused) {
                t.pause();
            } else {
                t.play();
            }
        }
    }


    function jumpTo(percent) {
        if (t.duration > 0) {
            console.log('t');
            t.currentTime = t.duration * percent;
        }
    }

    function offsetPlayback(step) {
        if (t.duration > 0) {
            if (step > 0) {
                step = 1;
            }
            if (step < 0) {
                step = -1;
            }

            if ((t.playbackRate == 1) || (t.playbackRate == -1)) {
                if (t.paused) {
                    t.playbackRate = t.playbackRate * step;
                    t.play();
                } else {
                    if (t.playbackRate + (step * 0.5) == 0) {
                        t.pause();
                        t.playbackRate = 1;
                    } else {
                        t.playbackRate = t.playbackRate + (step * 0.5);
                        if ((!__hack.isSafari) && (t.playbackRate < 0)) {
                            t.pause();
                            t.playbackRate = 1;
                        }
                    }
                }
            } else {
                if ((10 >= (t.playbackRate + (step * 0.5))) && ((t.playbackRate + (step * 0.5)) >= -10)) {
                    t.playbackRate = t.playbackRate + (step * 0.5);
                }
                if ((!__hack.isSafari) && (t.playbackRate < 0)) {
                    t.pause();
                    t.playbackRate = 1;
                }
            }
        }
    }

    function disableControl(e) {
        for (el in button) {
            try {
                button[el].style.opacity = '0.5';
            } catch (error) {};
        }
    }

    function enableControl(e) {
        for (el in button) {
            try {
                button[el].style.opacity = '1';
            } catch (error) {};
        }
        controlRolling();
    }

    function controlStatusUpdate(v) {
        if ((current.playbackRate != t.playbackRate.toFixed(1)) || ((parseFloat(button.playbackRate.value) || 0) == 0)) {
            if (t.playbackRate > 10) {
                t.playbackRate = 10;
            }
            if (t.playbackRate < -10) {
                t.playbackRate = -10;
            }
            button.playbackRate.value = t.playbackRate.toFixed(1).toString();
            current.playbackRate = t.playbackRate.toFixed(1);
        }
        if (!t.paused) {
            button.playStop.src = current.basePath + 'richVideoControlIcon_pause.png';
        } else {
            button.playStop.src = current.basePath + 'richVideoControlIcon_play.png';
        }
    }

    function controlRolling(e) {
        var percent = t.currentTime / t.duration;
        seeker.style.background = "linear-gradient(to right, rgba(252,88,0,0.7) " + Math.round(percent * seeker.clientWidth) + "px,rgba(0,0,0,0.2)" + Math.round(percent * seeker.clientWidth) + "px)";
        timeCode.innerHTML = '<span class="richVideoControl-timeCode_rolling">' + second2TimeCode(Math.round(t.currentTime * 100) / 100) + '</span>' + "/" + second2TimeCode(Math.round(t.duration * 100) / 100);
        controlStatusUpdate();
    }

    function showControl(e) {
        if (current.hideInterval > -999) {
            clearInterval(current.hideInterval);
            current.hideInterval = -999;
        }
        control.style.opacity = "1";
    }

    function hideControl(e) {
        if (current.hideInterval == -999) {
            if (current.showInterval > -999) {
                clearInterval(current.showInterval);
                current.showInterval = -999;
            }
            current.hideInterval = setInterval(function () {
                control.style.opacity = window.getComputedStyle(control).opacity - 0.025;
            }, 50);
            setTimeout(function () {
                if (current.hideInterval > -999) {
                    control.style.opacity = "0";
                    clearInterval(current.hideInterval);
                    current.hideInterval = -999;
                }
            }, 2000);
        }
    }

    //DOM event handler
    function seekTo(e) {
        if ((e.type == 'click') || (current.seeking)) {
            var percent = (e.clientX - control.clientLeft) / seeker.clientWidth;
            jumpTo(percent);
        }
    }

    function changePlaybackRate(e) {
        //if ((10 > parseFloat(e.target.value)) && (parseFloat(e.target.value) > -10)) {
            t.playbackRate = parseFloat(e.target.value);
        //}
        if (t.playbackRate == 0) {
            t.pause();
            t.playbackRate = 1;
        }
    }

    //setup events. All events setup after this line because all handler declare above.

    //video control events
    control.addEventListener('mouseover', function () {
        clearTimeout(current.hideTimeout);
    });
    control.addEventListener('mouseout', function (event) {
        var newEvent = document.createEvent("HTMLEvents");
        newEvent.relatedTarget = event.relatedTarget;
        newEvent.initEvent("mouseout", true, true);
        t.dispatchEvent(newEvent);
    });
    //--------------------------------------------------------
    seeker.addEventListener('click', seekTo);
    seeker.addEventListener('mousedown', function () {
        current.seeking = true;
    });
    seeker.addEventListener('mousemove', seekTo);
    seeker.addEventListener('mouseup', function () {
        current.seeking = false;
    });
    seeker.addEventListener('mouseout', function () {
        current.seeking = false;
    });
    seeker.addEventListener('blur', function () {
        current.seeking = false;
    });
    //--------------------------------------------------------
    button.playStop.addEventListener('click', function () {
        play();
    });
    button.forward.addEventListener('click', function () {
        offsetPlayback(1);
    });
    button.backward.addEventListener('click', function () {
        offsetPlayback(-1);
    });
    button.begin.addEventListener('click', function () {
        jumpTo(0);
    });
    button.playbackRate.addEventListener('change', changePlaybackRate);
    button.reset.addEventListener('click', function () {
        t.playbackRate = 1;
    })

    //video player events
    t.addEventListener('canplay', enableControl);
    t.addEventListener('playing', controlRolling);
    t.addEventListener('timeupdate', controlRolling);
    t.addEventListener('seeking', controlRolling);
    t.addEventListener('ratechange', controlStatusUpdate);
    t.addEventListener('pause', controlRolling);
    t.addEventListener('play', controlRolling);
    t.addEventListener('emptied', disableControl);
    t.addEventListener('mouseover', showControl);
    t.addEventListener('mousemove', showControl);
    t.addEventListener('mouseout', function (event) {
        var e = event.toElement || event.relatedTarget || document.body;
        if ((e.parentNode != event.target.parentNode) && (e != event.target)) {
            current.hideTimeout = setTimeout(hideControl, 1000);
        }
    });


    //init the control
    resizeControl();
    controlRolling();
    t.controls = false;
    disableControl();
    t.parentNode.appendChild(control);

}