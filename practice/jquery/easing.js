$(function() {
  var easings = ["swing", "easeInCirc", ]

  function togThatBitch(id, easing) {
    console.log("toggling: " + id)
    $("#" + id).slideToggle(1000, easing, function() {
      togThatBitch(id, easing)
    })
  }

  easings.forEach(function(easing) {
    var div = $('<div></div>', {"id" : easing, "text": easing})
    $("body").append(div)

    togThatBitch(easing, easing)
  })
})
