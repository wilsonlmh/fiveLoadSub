/*
richVideoControl.js v0.2 (c) 2015 by Wilson Luniz @ Previous Production Macau. Licensed under the GPLv3 license
See http://github.com/wilsonlmh/richVideoControl.js/ for license and more info 
*/
var store = store || [];
if (typeof getFile != 'function') {

    function getFile(url) {
        var result = url;
        if (store.length > 0) {
            for (var row of store) {
                if (row.url == url) {
                    result = row.dataUrl;
                }
            }
        }
        return result;
    }
}

var lastScriptPath
try {
    lastScriptPath = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].getAttribute('src').split('?')[0].split('/').slice(0, -1).join('/') + '/';
} catch (e) {};
lastScriptPath = lastScriptPath || './';

store.push({
    "url": lastScriptPath + "richVideoControlIcon_backward.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAf5JREFUeNrsnMFxwjAQRc2ObjkkJeTAPaSDpIN0EDFDA3SQEugguIKkBEpIOuDIkVTgWDNwBYyk/X/N7ozO/8+zZOvbWk+6rmu8Tpc4AofkkBySQ3JIDskhcdTDYdDoCiGgTT9mTLpCCOiJTZcFUrqCPwBAF+kGEkDpSt6z6ooD4n66RRCgwboBCOjTiq44ID5IKxCgLF3N5bbuxzsAULauOCA8pLSb/QYAKqobKhuljBksM2k0gGpBmoEAVdMNlYxSxwzkTBoloJKQ3kCAVHRLQErb/S9QUFXRlQJGTeUwbUgfIEDqutc+3UzHDI2ZdFOAhkIaRQ6rudxGFTNqzKSbBnQJJFQOm7IAOrfcHkG76FTpdetdQ1KnZtK+H1uQr11DVOcgpeXWAnwtQLpX37gjyHBkASXkhilAyUDDcxCouRVIx2iAMLxGghJDhmGgJMPwcz/+AKDUdXPeJ6UTYi8AUOq6Ys0wQlcKGU6bzl8AKBXdUl9Ltocrqw1KRbfkd7c9CFR1XalkuAWBai1AOhqOIFBVdGueTxpN3hMFw0sQqKUVSKlWoDhRTFfzzKTZvCfKhl9BeS9LV/sc9wYUY7J0ER0B5vIeqgHHVN5DdimZyXvofjcTeY+hvZQ+77H04FLnvdBwVWTUnfhPpmzckxySQ3JIXg7JITkk9foXYABAGpV5oXhDIgAAAABJRU5ErkJggg=="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_forward.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgBJREFUeNrsnM1Nw0AQhZORD9zgyNEdhBLcSUIHKQEqQFSQ0AEdECrAdEBuHEkFxpZsCSSIYDU7781mRtrze/q8P/N2o8y7rptFHS8JBAEpIAWkgBSQAlJA+l41yFPtCdKqH1uAJ5Ru8nJbjoYvjH2hdJP3pMHwDgRqxwDqrxv3AmR4wQBKEgzXIFC1B0iT4bYfVwBQCN3kPul8/LLWhlG6yc3kZLgBgWo8QJoMP419jTUoU12NWLIBgDLVFUXDaxCotRdIQ92B4kR2Xe1bgCUIVFZd8WYYoSsZDbegvKeum/PSrZi8J94MI3TFyPAbKO+p6FrdcbvOe+LNMEJXAIZfQHkvWRf1pOQq7yHf3dyAQj9ObkDd+b90GV5w6WMMyzM3NSim3wJMueuMLe9VM64auuRLkO7QSzX9+GCeSVO9g3TbnwAxzqTbL1/WWvfGw550fcwoUleIAG1ZddHL7TB2v4/MuhUYUDNumNS6EoA4Ie1BgJJ1rZfb628NG7OuBCAeSM8gQCq6FpAeQIDUdMXA6ApwOKjq5oR0DwKkrpvrdKOOGQwzqShA2pAOIEDZdStFo25iBmImFQ1IA5K7HGa93NzGDKuZdDKAUiG5zmEWkNznsNyQishhOSEVk8NynW7FxQztmXTygIaax59MYW4BAlJAigpIASkgBST6+hRgAP0YmjKqeTuvAAAAAElFTkSuQmCC"
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_begin.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeZJREFUeNrs3NFNwzAQBmDH6juM0A1gAxiBDQgT0BFgg2xAmQBG6AjtBh2hTJDaKBVSSaPKse+/O99J91bpTl+VxHYcN33fO4vp8EZgSIZkSIZkSIZkSH+xOcuWuK/bkB3AY7Tu4sKPH0bQKBuN9Q4AoNG63C63U6N3nOp6A3L3IfdTdb0B/da94f50Yw3EAYk9EBpJBBAaqZMAhERah3yWAIRCQgA9pQIhkBBAcUr1lQpEjYQC+pCyCiAWiApJNBAFknig0kgqgEoiIYBWJYBiLJQAFa3pDYgWSSVQTiS1QLmQVAPlQOq0A81FimOS1womyMlDgCKDtomIq5jf7v/7QLZICKCNo1/FTL7cqgNKQVoR97cc0klCegy5I+xvO9T8kYR0qBEqZQhQHVTqOKkqqDmDyWqg5k5LqoDKMcFFQu2kIKmHyrnohoAiqeklNk1d0xdquiV+AhWF8oXvFyqgSr6cVANV+jW3CiiKDRMoqLiz7VMKEnLe1eaAotzEJRaKejugSCjExlJxUKgtyqKgkJvdxUChvy1BQr1LQUJCvYV8kYKEhFpfA8Xpy0m2UNy+wT1BOU5QHM8F2F57r6CCai6cn3T+b+6HpIwloOZo3cYOmZLzdDMkQzIkC0MyJEMijaMAAwDACKg+5QRqVQAAAABJRU5ErkJggg=="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_pause.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ1JREFUeNrs3MEJwCAQAMFoBZZiCSk9nV0sQARRzCOzcE85GXybIuLSuAQJEiRIkCBB+mN58fzdJiZnR0f3Zu8EEiRIkCBBgiRIkCBBggQJkiBBggQJEiRIkAQJEiRIkCBBEiRIkCBBggRJkCBBggQJEiRIggQJEiRIkCAJEiRI37T6eUJpUyfPPBvufXSvHyYgQYIECRIkSOr3CjAAlD9Nt/ZuSukAAAAASUVORK5CYII="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_play.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAf9JREFUeNrs2uFRgzAUB3Dk+N5uICN0g+oGbiBu4AatE4gTWDeoE0gnECeQbtBOgOEa7vJBCRiSvLz83937Zqn3uwT+5PWqbdsENVwpCIAEJCABCUhAAtK42oveil4C6e/qcDaia9EFkIbrWvSr6IY71hz3JBXrBkh6rA/RFTcsG0+3tYK1ApIe61P0TnQOpOG6F/0dMpbLMNljBZexfCTujXwSBoPl67VkoWA9AkmP9Uw9kFJ5wSWd3qmdAvRYpAIp1aOSNaX0Tv08ScXKgaTH8hZIQzuZVNP7Ekh6LGeBNOQz7oWr9M5hEKBiFUDSY1kJpBxHSrMfJ3Oeu812nBzDcNI4vcc0we2xJgfSGMfck4+TY/4tQI9V6jIWfjBxGXvlQPq9jqIf5M28HvrDLFKcrbwnjaqYkM4Sp5z6wSwSnFL26T8X4I70ZILDHelNbq1mjotlwIkH6ZBcJsG1jYunDHBux2SdGFfSl1w5lYsvC20l9Sl55QoopJU0OSXHhGQcBDkjkcChjPQit9aJyj9ECclKEOSC9C4f5w3Rre81AvRB8I4ykK+VdJDbqkoCKZdIR7mt9qHF+9QRTpeS8xCBbK+ks1w5uyTwyizhkAmC1JDY4cyNRDYIUkBijWOK1GWdgjuOCVI0OCY5KSog3+9uQAISkFBAAhKQvNWPAAMAZ8F2StlOCaoAAAAASUVORK5CYII="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_reset.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA75JREFUeNrsnN1xozAQgBWPX/IUOjAdhKvALoEOjnTgdMBVcO7gSAe4A1JBcAWHKzj5KY8+aWY95+H42V1JgAg7s+OMh8DysbtarYQfrterWKRbVguCBZIVWY903Qg0VLqD7/Tfm9pxJ6UStLzTakhjHwbKSYHSGIDozyfD852V5koL+PQakoaSWALTJhelmdKDMw/TkBzoTmlxHV4ypaHt+7HtSRE80e3IufZN6R5y2aRGt1TpxwQAafkOoRdPJSdFkBOeJzqCHyEvyrEgxQDoSUxbzmBrOTQk/XR+eVQTXmC0LYeClEHc2zL+ViBWDaEcWM5zL2C/0xIgtTBU50oT4nAdKd0rLS1cP6bcMxVQYmBYBTcZWKhdNNyDUsm0RQJ065B2BgYljorWwMCzJfaBUYyRzLAKHAGqexYnDAubkIoJeU+XHhigUhuQ9i7j3YFy8mZkAokaZmMD4oIqTCAdPATEBRVzugC6U/ibUHJ945b9DkV3An4Spi4htQuQEox5nSAgAW2bI/LYTVvXoM2TApgiYCau73d96imK8b2sOmb32Jl9MvGJrYSww8i2KeRWHbGM7QBWYvqSQc7B5rFeSCGhgZYKfwRrKyrcdjPzIqo3PddDzgRSLvyTnONNXEgXTyFltiBtECcphJ9SwgPuk85ww4aar5Cwtm+7IAWEJyI89iZsEdoIKVog/c+Cu4IrPYZEtn3ZxLVAWiAtkOYAKfD4ngNTSOTh0UMhlzkr5vD4FSDJNkjY6cbOY0gY29/7ctJ5xpC0F2Ha0lUfJIw36QvFHkJKOJNgLiSxQMKJ3ukWegYIE2onTLhVcCBGUo8gYW3NscXkgeBNPpQDeplogzw2q38xpxXcUDSv3jhbwZUC3zTfCvxipktAZYtXZwK/Gt0cQT1b7KxthHKs+5btP5QNaNXc9ycVDXYMsj+JGs9a2LvuDWf1f2rffSp9JJyjM6/2tUokMd88QZ01ZP3UVNQ+Es+RmPaTsvqEDzHvkSNDosgP0bOnAftuCTbsTuC2Q0KSgv+WFKp8WREMiScIyOTd3gvWCyntW51rXiYEyCTULiR7DWqSm5QDvRrRpBXzvZId5TqchQBdlb6N7EG3BtqG8X+fVHu5qyV6yHwdERClN9RUHhSUiflQvzDhQiqmJ5ELX18XJ0NDQDfIKG9aewqJO6odoamWU9KEr5ASQkjdoBTc/OljTmqa0N7LuQbGWNYzCbUTzDELFx0InyEdxb/fT6pcXtBHSLkw/O2Rr5CTBpdlE9cCyY78FWAAUP9VJkZ1g/gAAAAASUVORK5CYII="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_dock.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNrs2sENQDAYgFHEXoxmFKPUBkawSXGTSKjEgfZ9SS89vvRvQlrHGCtdV0OCBAkSJEiQIAkSJEjfRBoKNlm2NaYglXy8pm31x43GMN3XPtANmRrsp6Z7AylkfE8Nd0jGLSFIkCBBggQJEiRBggQJEiRIkAQJEiRIkCBBgiRIkCBBgpRXHnGd84jLuEGCBAkSJEGCBAkSpB/WXnzkldqc+hdAkCBBggQJEiRIkCBBggTpV60CDAAx2V+5jXBhVQAAAABJRU5ErkJggg=="
});

store.push({
    "url": lastScriptPath + "richVideoControlIcon_hide.png",
    "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALxJREFUeNrs3LERgyAYgFHx7LNCNtGRHCGbednAbOIGSGnwoEkqeN/d31C+A48GQ4xxUL0RASRIkCBBggRJkCBBggQJEiRBggQJEiRIkCAJEiRIkCBBgiRIkCBBggQJkiBBggQJEiRIkAQJEiRIkCBB0ldTYX3p2ORIs18XQuE1d89PvN/5JnHcfjhueZ80a6MG27+QnmledlK9R5oZ0v3j1Wt7vhD8q8RlEhIkSJAgQRIkSJAgQWqhU4ABALZZEhD+Oj9TAAAAAElFTkSuQmCC"
});

var importCSS = document.createElement('style');
importCSS.innerHTML = '.richVideoControl-button:hover{background:rgba(0,0,0,.2)}.richVideoControl-button:active,.richVideoControl-buttons{background:rgba(0,0,0,.5)}.richVideoControl-button{width:26px;height:26px;padding:0;margin:7px 10px;border:0;float:left}.richVideoControl{position:absolute;overflow:hidden;padding:0;border:0;margin:0}.richVideoControl-buttons{height:40px;min-width:210px;display:inline-block;padding:0 5px;margin:0;float:left}.richVideoControl-seeker{background:linear-gradient(to right,rgba(252,88,0,.7) 0,rgba(0,0,0,.2) 0);height:10px;width:100%;padding:0;border:0;margin:0;overflow:hidden}.richVideoControl-timeCode{width:210px;height:40px;padding:0;border:0;margin:0;display:inline-block;background:rgba(0,0,0,.8);overflow:hidden;font-size:18px;color:rgba(252,88,0,.9);text-align:center;font-style:bold;line-height:40px}.richVideoControl-timeCode_rolling{color:#fff}.richVideoControl-playbackRate{border:1px solid rgba(252,88,0,.9);background:rgba(0,0,0,.5);text-align:center;height:24px;font-size:16px;padding:0;margin-top:7px;margin-bottom:7px;color:#fff;min-width:50px;width:50px;float:left;display:inline-block}.richVideoControl-volume{-webkit-appearance:none;width:80px;margin-top:10px;background:transparent;float:left;}.richVideoControl-volume::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid #000;height:20px;width:10px;border-radius:2px;cursor:pointer;background:#fff;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;margin-top:-10px}.richVideoControl-volume::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:10px;border-radius:2px;background:#fff;cursor:pointer}.richVideoControl-volume::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:rgba(252,88,0,.9);border-radius:1px;border:.2px solid #010101;margin-top:10px}.richVideoControl-volume:focus::-webkit-slider-runnable-track{background:rgba(252,88,0,.9)}.richVideoControl-volume::-moz-range-track{width:100%;height:5px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:rgba(252,88,0,.9);border-radius:1px;border:.2px solid #010101}';
//importCSS.setAttribute('rel','stylesheet');
//importCSS.setAttribute('type','text/css');
//importCSS.setAttribute('href','');
document.getElementsByTagName('head')[0].appendChild(importCSS);
importCSS = null;
delete importCSS; //release pointer


function richVideoControl$applyControl(t) {

    var current = {
        seeking: false,
        hideTimeout: 0,
        hideInterval: -999,
        playbackRate: 1.0,
        slidingVolume: false,
        basePath: lastScriptPath,
        playing: false, //oppsite to t.paused
        playUpdater: 0,
        autoHide: true
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
        reset: document.createElement('img'),
        volume: document.createElement('input'),
        dock: document.createElement('img'),
    };

    button.playStop.src = getFile(current.basePath + 'richVideoControlIcon_play.png');
    button.forward.src = getFile(current.basePath + 'richVideoControlIcon_forward.png');
    button.backward.src = getFile(current.basePath + 'richVideoControlIcon_backward.png');
    button.begin.src = getFile(current.basePath + 'richVideoControlIcon_begin.png');
    button.reset.src = getFile(current.basePath + 'richVideoControlIcon_reset.png');
    button.dock.src = getFile(current.basePath + 'richVideoControlIcon_hide.png');
    button.playbackRate.setAttribute('type', 'text');
    button.volume.setAttribute('type', 'range');
    button.volume.setAttribute('max', '1');
    button.volume.setAttribute('min', '0');
    button.volume.setAttribute('step', '0.01');

    button.playStop.classList.add("richVideoControl-button");
    button.forward.classList.add("richVideoControl-button");
    button.backward.classList.add("richVideoControl-button");
    button.begin.classList.add("richVideoControl-button");
    button.reset.classList.add("richVideoControl-button");
    button.dock.classList.add("richVideoControl-button");
    button.playbackRate.classList.add("richVideoControl-playbackRate");
    button.volume.classList.add("richVideoControl-volume");

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
    buttons.appendChild(button.volume);
    buttons.appendChild(button.dock);

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
            button.playbackRate.value = t.playbackRate.toFixed(1).toString() + "x";
            current.playbackRate = t.playbackRate.toFixed(1);
        }
        if (!t.paused) {
            button.playStop.src = getFile(current.basePath + 'richVideoControlIcon_pause.png');
        } else {
            button.playStop.src = getFile(current.basePath + 'richVideoControlIcon_play.png');
        }
        if (t.paused == current.playing) {
            current.playing = !current.playing;
            if (current.playing) {
                current.playUpdater = setInterval(controlRolling, 25);
            } else {
                clearInterval(current.playUpdater);
            }
        }

    }

    function controlRolling(e) {
        var percent = t.currentTime / t.duration;
        seeker.style.background = "linear-gradient(to right, rgba(252,88,0,0.7) " + Math.round(percent * seeker.clientWidth) + "px,rgba(0,0,0,0.2)" + Math.round(percent * seeker.clientWidth) + "px)";
        timeCode.innerHTML = '<span class="richVideoControl-timeCode_rolling">' + second2TimeCode(Math.round(t.currentTime * 100) / 100) + '</span>' + "/" + second2TimeCode(Math.round(t.duration * 100) / 100);
        if ((button.volume.value != t.volume) && (!current.slidingVolume)) {
            button.volume.value = parseFloat(t.volume.toFixed(2));
        }
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
        if ((current.hideInterval == -999) && (current.autoHide)) {
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

    function changeVolume(e) {
        current.slidingVolume = true;
        t.volume = e.target.value;
    }
    
    function toggleAutoHide(e) {
        current.autoHide = !current.autoHide;
        if (current.autoHide) {
            button.dock.src = getFile(current.basePath + 'richVideoControlIcon_hide.png');
        } else {
            button.dock.src = getFile(current.basePath + 'richVideoControlIcon_dock.png');
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
    button.volume.addEventListener('input', changeVolume);
    button.dock.addEventListener('click', toggleAutoHide);

    //video player events
    t.addEventListener('canplay', enableControl);
    t.addEventListener('playing', controlRolling);
    t.addEventListener('timeupdate', controlRolling);
    t.addEventListener('seeking', controlRolling);
    t.addEventListener('volumechange', controlRolling);
    t.addEventListener('ratechange', controlStatusUpdate);
    t.addEventListener('pause', controlStatusUpdate);
    t.addEventListener('play', controlStatusUpdate);
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