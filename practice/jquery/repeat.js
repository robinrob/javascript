$(function() {
  var div = $("div")
  var enlarged = false


  function toggleBox() {
    if (enlarged == true) {
      decreaseBox();
    }
    else {
      increaseBox();
    }
    enlarged = !enlarged
  }

  function decreaseBox() {
    $("div").animate({
      "width": "200px",
      "height": "200px"
    }, 1000, "swing", toggleBox)
  }

  function increaseBox() {
    $("div").animate({
      "width": "220",
      "height": "220"
    }, 1000, "swing", toggleBox)
  }

  toggleBox();

  $("div").on("click",function(event) {
    for (i in event) {
      document.write(i + "<br>")
    }
  })
})
