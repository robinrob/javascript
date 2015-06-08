$("td").filter(":odd").css("background", "red")
$("td").filter(":even").css("background", "blue")



$("table tr td").first().remove()

$("table tr").last().children("td").last().empty()

// This removes parent of child
$("#child2").unwrap()
