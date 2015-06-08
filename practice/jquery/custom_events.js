// Custom events are useful when you want to perform
// a function on an element when an event occurs on
// more than one OTHER element.
//
// Custom events tidy up the event-handling code

$(function() {
  $("#reset").on("click hover", function() {
    $("div").css("background", "red")
  })

  $("button").not("#reset").on("click", function() {
    $("div").trigger("robin")
  })

  $("div").on("robin", function() {
    $(this).css("background", "blue")
  })
})
