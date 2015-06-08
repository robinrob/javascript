// $("p").on("click", function() {
  // this is bad - single event handler per
  // paragraph duplicates work.
  //
  // also, any new paragraps (user-created?) added
  // will not have an event handler.
// })



// The second argument here is a "delegate selector"
$("div").on("click", "p", function(event) {
  var target = event.currentTarget
  var paras = $("p")

  $.each(paras, (function(index, para) {
    console.log("para: " + para)
    if (para == target) {
      alert("You clicked paragraph " + ++index + "!")
      return
    }
  }))
})
