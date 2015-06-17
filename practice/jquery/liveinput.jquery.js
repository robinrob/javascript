(function($) {
    $.fn.liveInput = function(options) {
        var defaults = {
            text: "<Text>",
            input: ".input"
        }
        var params = $.extend({}, defaults, options)

        var keySounds = [
            "keypress1.mp3",
            "keypress2.mp3",
            "keypress3.mp3"
        ]

        function keySound() {
            return keySounds[Math.round(Math.random() * (keySounds.length - 1))]
        }

        function keyPress() {
            var audio = document.createElement("audio");
            audio.src = keySound()
            console.log("src: " + audio.src)
            audio.addEventListener("ended", function () {
                $(this).remove()
            }, false);
            audio.play();
        }

        function writeText(text, cursorElement) {
            var chars = text.split("")
            chars.forEach(function (char, index) {
                setTimeout(function () {
                    writeChar(char, cursorElement)
                    keyPress()
                }, index * 200 + Math.random() * 200)
            })
        }

        function writeChar(char, cursorElement) {
            console.log("char: " + char)
            var $char = $("<span />", {
                html: char,
                class: "char"
            });
            $($char).insertBefore(cursorElement)
        }

        function isValidChar(char) {
            var regex = /[-,.;:@& a-zA-Z0-9]/
            return regex.test(char)
        }

        function isPossibleKeyCode(keyCode) {
            return event.keyCode === 8 || isValidChar(String.fromCharCode(keyCode))
        }

        function toggleCursor(cursorElement) {
            cursorElement.fadeToggle({
                duration: 100,
                complete: setTimeout(function () {
                    toggleCursor(cursorElement);
                }, 500)
            })
        }

        return this.each(function () {
            var $input = $(params.input)

            var $cursor = $("<span />", {
                text: "_",
                class: "cursor"
            });
            $input.append($cursor)

            setTimeout(function() {
                writeText(params.text, $cursor)
            }, 500)

            toggleCursor($cursor);

            var focussed = false
            $(".input").on("focusin", function () {
                focussed = true
            })

            $(".input").on("focusout", function () {
                focussed = false
            })

            $(document.documentElement).on("keydown", function (event) {
                if (focussed && !event.hasRun) {
                    console.log("keydown")
                    if (event.keyCode === 8) { //backspace
                        console.log("backspace")
                        event.type = "keyInput"
                        $(this).trigger(event)
                        event.preventDefault()
                    }
                }
            })

            $(document.documentElement).on("keypress", function (event) {
                if (focussed && !event.hasRun) {
                    event.type = "keyInput"
                    $(this).trigger(event)
                    event.preventDefault()
                }
            });

            $(document.documentElement).on("keyup", function (event) {
                if (isPossibleKeyCode(event.keyCode)) {
                    keyPress()
                }
            });

            $(document.documentElement).on("keyInput", function (event) {
                console.log("keyInput")
                var char = String.fromCharCode(event.keyCode)

                if (event.keyCode === 8) { //backspace
                    console.log("backspace")
                    $(".cursor").siblings().last().remove()
                }
                else if (isValidChar(char)) {
                    if (char == ' ') {
                        char = '&nbsp'
                    }
                    writeChar(char, $cursor)
                }
            });
        })
    }
})(jQuery)