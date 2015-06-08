$(function() {
  $("#one").slideUp("slow")

  $("#two").slideUp("fast", function() {
    $("#two").slideDown("fast")
  })

  $("#one").slideToggle()

  $("#three").animate({
    "opacity" : 0
  }, 1000)

  $("#four").animate({
    "width" : "300px",
    "height" : "300px"
  }, 1000)
})
