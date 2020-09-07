(function () {
    "use strict";
    var R = 82,
        X = 88,
        B = 66,
        Y = 89;
    var rxbbyCode = [R, X, B, B, Y];
    var rxbbyDetected = [];
    function attachCustomEvent(el, eventName, desiredFunction) {
        if (el.addEventListener) {
            el.addEventListener(eventName, desiredFunction, false);
        } else {
            el.attachEvent("on" + eventName, desiredFunction);
        }
    }
    function detachCustomEvent(el, eventName, desiredFunction) {
        if (el.removeEventListener) {
            el.removeEventListener(eventName, desiredFunction, false);
        } else {
            el.detachEvent("on" + eventName, desiredFunction);
        }
    }
    function startUprxbby() {
        detachCustomEvent(document, "keydown", isrxbbyKey);
        rxbbyIsDetected();
    }
    function isrxbbyKey(e) {
        var evt = e || window.event;
        var key = evt.keyCode ? evt.keyCode : evt.which;
        var codeOk = true;
        rxbbyDetected.push(key);
        if (rxbbyDetected.length < rxbbyCode.length) {
            for (var i = 0, max = rxbbyDetected.length; i < max; i++) {
                if (rxbbyDetected[i] !== rxbbyCode[i]) {
                    codeOk = false;
                }
            }
            if (!codeOk) {
                rxbbyDetected = [];
                rxbbyDetected.push(key);
            }
        } else if (rxbbyDetected.length === rxbbyCode.length) {
            for (var j = 0, max = rxbbyDetected.length; j < max; j++) {
                if (rxbbyDetected[j] !== rxbbyCode[j]) {
                    codeOk = false;
                }
            }
            rxbbyDetected = [];
            if (codeOk) {
                startUprxbby();
            }
        } else {
            rxbbyDetected = [];
        }
    }
    attachCustomEvent(document, "keydown", isrxbbyKey);
})();
function rxbbyIsDetected() {
    setTimeout(function () {
        $("#rxbby")
            .animate({ left: "100%", bottom: "100%" }, 10000)
            .animate({ left: "50%", bottom: "50%" }, 5000)
            .animate(
                { deg: 180 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate(
                { deg: 360 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate(
                { deg: 540 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate(
                { deg: 720 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate(
                { deg: 900 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate(
                { deg: 1080 },
                {
                    duration: 500,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                }
            )
            .animate({ left: "100%", bottom: "100%" }, 5000);
    });
}
