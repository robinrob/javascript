$(function() {
  $("#one").fadeOut("slow")

  $("#two").fadeOut("normal")

  $("#three").fadeOut("fast")

  $("#four").fadeOut(3000)

  $("#five").fadeTo(3000, 0.5)

  $("#six").hide()
  $("#six").fadeIn(4000)

  function togThatBitch() {
    $("#seven").fadeToggle(500, null, togThatBitch)
  }
  $("#seven").fadeToggle(500, null, togThatBitch)
})
