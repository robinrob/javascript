$("form").on("submit", function() {
  alert("Submitted!")
})

$("button").on("click", function() {
  $("form").trigger("submit")
})
