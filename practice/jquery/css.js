$("div").css({
  "height" : "200px",
  "width" : "200px"
})


$("div:first").css("background", "red")

var div = $("div").next()
if (!div.hasClass("yellow")) {
  div.addClass("yellow")
}

// There are 3 different ways to apply some filters!
div = $("div:eq(2)")
div.addClass("blue")

$("div").eq(3).css("background", "green")

$("div").filter(":eq(4)").css("background", "purple")
