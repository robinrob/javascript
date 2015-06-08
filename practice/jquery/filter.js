$("td").filter(":odd").css("background", "red")

$("td").filter(":even").css("background", "blue")


$("td").filter(function() {
  return $(this).children("strong").length > 0
}).css("background", "yellow")


$("#chequered tr").each(function(i) {
  $($(this)).children().each(function(j) {
    if ((i + j) % 2 == 0) {
      $(this).css("background", "red")
    }
    else {
      $(this).css("background", "blue")
    }
  })
})

