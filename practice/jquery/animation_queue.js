$(function() {
  $("div")
  .animate({ "height" : 300 })
  .fadeOut()
  .show(500)
  .animate({ "width" : 100 })
  .css("background", "red");

  $("#one").on("click", function() {
    // The stop() call here clears the animation queue
    // so that they do not build up.
    $("div").stop().fadeToggle(500);
  });

  // If you pass in true for the second argument, jQuery will immediately
  // skip to the end of the animation. So if the div is midway through fading in
  // when stop() is called with true as the second argument, the div will
  // immediately become fully faded in. You need a combination of both of these:
  $("#two").on("click", function() {
    $("div").stop(true, true).fadeToggle(500);
  });

  $("#three").on("click", function() {
    $("div").css("background", "green");
    $("div")
    .animate({ "height" : 300 })
    .fadeOut()
    .show(500)
    .animate({ "width" : 100 }, function() {
      $("div").css("background", "red");
    })
  });
});
