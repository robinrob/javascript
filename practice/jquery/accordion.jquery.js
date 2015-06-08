(function($) {
  $.fn.accordion = function(options) {
    var defaults = {
      heading: "h2",
      paragraph: "p"
    }
    var params = $.extend({}, defaults, options)

    return this.each(function() {
      var headings = $(this).children(params.heading)
      var paragraphs = $(this).children(params.paragraph)

      var animateAccordion = function(elem) {
        var easing = "easeInSine"
        paragraphs.stop(true, true).slideUp("normal", easing)
        $(elem).stop(true, true).slideDown("normal", easing)
      }

      paragraphs.not(":first").hide()
      $(this).on("click", "h2", function() {
        console.log("H2 CLICKED")
        var para = $(this).next()
        // It's .next() because 'this' is referring to a header,
        // and the related paragraph comes next in the DOM of
        // this page.
        if(!para.is(":visible")) {
          para.trigger("showParagraph")
        }
      })

      $(this).on("showParagraph", "p", function() {
        console.log("p CLICKED")
        animateAccordion(this)
      })
    })
  }
  // $.fn.accordion({})
})(jQuery)
