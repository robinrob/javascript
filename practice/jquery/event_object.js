$(function() {
  $("div").on("mouseenter mouseleave", function(event) {
    if(event.type === "mouseenter") {
      $(this).css("background", "blue");
    } else {
      $(this).css("background", "red");
    }
  });

  $("div").on("click",function(event) {
    for (i in event) {
      document.write(i + "<br>")
    }
  })

  $("html").on("click", function(event) {
    alert("Your mouse is at X " + event.pageX + " and at Y " + event.pageY);
  });
})
