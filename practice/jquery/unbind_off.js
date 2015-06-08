$(function() {
  var clickEvent = function() {
    alert("clickEvent");
  };
  $("p").on("click", function() {
    alert("click");
  }).on("click", clickEvent);
  
  $("p").off("click", clickEvent);
});
