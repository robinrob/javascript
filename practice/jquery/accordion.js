var headings = $("h2");
var paragraphs = $("p");


$(function() {
  var headings = $("h2");
  var paragraphs = $("p");
  paragraphs.not(":first").hide();
  var accordion = $("#accordion")

  accordion.on("click", "h2", function() {
    var para = $(this).next()
    // It's .next() because 'this' is referring to a header,
    // and the related paragraph comes next in the DOM of
    // this page.
    if(!para.is(":visible")) {
      para.trigger("showParagraph")
    }
  });

  accordion.on("showParagraph", "p", function() {
    // Make sure any currently-queued animations are finished first
    var easing = "easeInSine"
    paragraphs.stop(true, true).slideUp("normal", easing);
    $(this).stop(true, true).slideDown("normal", easing);
  });
});

