$(function() {
  $("#one").hide(2000)

  $("#two").hide()
  $("#two").show(2000, "swing", function() {
    console.log("two is shown!")
  })

  function togThatBitch() {
    $("#three").toggle(500, null, togThatBitch)
  }
  $("#three").toggle(500, null, togThatBitch)
})
