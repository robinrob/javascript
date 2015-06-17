$(function () {
    var $input = $(".input")

    var $cursor = $("<span />", {
        text: "_",
        class: "cursor"
    });
    $($input).append($cursor)


    function writeHeading() {
        var chars = "Robin Smith".split("")
        chars.forEach(function(char, index) {
            var $char = $("<span />", {
                text: char,
                class: "char"
            });
            setTimeout(function() {
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

    function toggleBox() {
        $cursor.fadeToggle({
            duration: 100,
            complete: setTimeout(function () {
                toggleBox();
            }, 500)
        })
    }

    //toggleBox();

    $(document.documentElement).on("keyup", function(event) {
        console.log("keyup")

        if(event.keyCode === 37) { //backspace
            console.log("backspace")
            $(".cursor").siblings().last().remove()
        }
        else {
            console.log("input: " + String.fromCharCode(event.keyCode))
            var $char = $("<span />", {
                text: String.fromCharCode(event.keyCode),
                class: "char"
            });
            $(".cursor").insertBefore($char)
        }
        event.preventDefault()
    });
})