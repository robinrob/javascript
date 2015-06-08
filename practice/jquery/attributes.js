$("div").filter(function() {
  return $(this).attr("name") == "wanker"
}).animate({
    "width": "400px",
    "height": "400px"
}, 2000)
