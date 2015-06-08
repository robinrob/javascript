$("form").on("submit", function() {
  var val = $("#name").val()
  if (val) {
    alert("Thanks for the data!")
  }
  else {
    console.log("Wanker!")
    $("#name").css("background", "red")
    $("p").text("Must complete required fields!")
    $("p").css("color", "red")
    return false
  }
})
