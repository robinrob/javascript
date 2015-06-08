// JQuery method defaults to assuming on-ready behaviour
$(function() {
  alert("Ready 1!")
})

$(document).ready(function(){ alert("Ready 2!")})

$(document).on("ready", function(){ alert("Ready 3!")})
