$(function() {
  var div = $("div")
  var h1 = $("h1")
  var i = 0


  function toggleBox(i) {
    div.fadeToggle(500, function() {
      if (i < 10) {
        ++i
        h1.text(i)
        toggleBox(i);
      }
    })
  }

  toggleBox(i);
})
