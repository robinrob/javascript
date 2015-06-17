$(function () {
    var $input = $(".input")

    var $cursor = $("<span />", {
        text: "_",
        class: "cursor"
    });
    $input.append($cursor)
    //$cursor.insertAfter($input)


    function writeHeading() {
        var chars = "Robin Smith".split("")
        chars.forEach(function(char, index) {
            var $char = $("<span />", {
                text: char,
                class: "char"
            });
            setTimeout(function() {
                //$input.val($input.val() + char)
                $($char).insertBefore($cursor)
            }, index * 200 + Math.random() * 200)
        })
    }

    setTimeout(writeHeading, 500)

    //var chars = {
    //    "R": 1,
    //    "o": 2,
    //    "b": 3,
    //    "i": 3.5,
    //    "n": 4
    //}
    //var speed = 500
    //for (var char in chars) {
    //    console.log("loop: " + char + ", " + speed * chars[char])
    //    var $char = $("<span />", {
    //        text: char,
    //        class: "char"
    //    });
    //    setTimeout(function() {
    //        $($char).insertBefore($cursor)
    //    }, speed * chars[char])
    //}

    function toggleCursor() {
        $cursor.fadeToggle({
            duration: 100,
            complete: setTimeout(function () {
                toggleCursor();
            }, 500)
        })
    }

    toggleCursor();

    //$($input).on("focus", function() {
    //    console.log("focussed input")
    //})
    //
    //$(".char").focus(function() {
    //    console.log("focussed char")
    //})

    var focussed = false
    $(".input").focusin(function() {
        focussed = true
    })

    $(".input").focusout(function() {
        focussed = false
    })

    $(document.documentElement).on("keydown", function(event) {
        if (focussed && !event.hasRun) {
            console.log("keydown")
            if(event.keyCode === 8) { //backspace
                console.log("backspace")
                event.type = "keyInput"
                $(this).trigger(event)
                event.preventDefault()
            }
        }
    })

    $(document.documentElement).on("keypress", function(event) {
        if (focussed && !event.hasRun) {
            event.type = "keyInput"
            $(this).trigger(event)
            event.preventDefault()
        }
    });

    $(document.documentElement).on("keyInput", function(event) {
        console.log("keyInput")

        var regx = /[-,.;:@& a-zA-Z0-9]/;
        var char = String.fromCharCode(event.keyCode)

        if(event.keyCode === 8) { //backspace
            console.log("backspace")
            $(".cursor").siblings().last().remove()
        }
        else if (regx.test(char)) {
            if (char == ' ') {
                char = '&nbsp'
            }
            console.log("char: " + char)
            var $char = $("<span />", {
                html: char,
                class: "char"
            });
            $($char).insertBefore($cursor)
        }
    });
})