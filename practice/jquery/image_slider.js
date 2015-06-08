$(function() {
  var slider = $("#slider");
  var sliderList = slider.children("ul");
  var sliderItems = sliderList.children("li");
  var itemWidth = parseInt(sliderList.first().css("width"))
  var nItems = sliderItems.length
  var minMargin = -1 * (nItems - 1) * itemWidth
  var duration = 200

  sliderList.css({"width": nItems * itemWidth})

  $(".buttons").on("click", ".button", function() {
    if ($(this).hasClass("back")) {
      animateSlider(-1)
    }
    else if ($(this).hasClass("next")) {
      animateSlider(+1)
    }
  })

  function isAtEnd() {
    var marginLeft = parseInt(sliderList.css("margin-left"))
    return marginLeft < (-1 * (nItems - 2) * itemWidth)
  }

  function isAtStart() {
    var marginLeft = parseInt(sliderList.css("margin-left"))
    return marginLeft > -itemWidth
  }

  function animateSlider(direction) {
    if ((direction > 0) && !isAtEnd()) {
      sliderList.stop(true, true).animate({"margin-left": "-=" + itemWidth}, duration)
    }
    else if ((direction < 0) && !isAtStart()) {
      sliderList.stop(true, true).animate({"margin-left": "+=" + itemWidth}, duration)
    }
  }
})
