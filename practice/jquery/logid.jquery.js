// jQuery exists as two global variables by default: $ and jQuery. They both
// are identical, so if jQuery.noConflict() is called, you can still use
// jQuery through the jQuery method, but not through $.
// To be safe, you should use the jQuery variable rather than $ within your
// plug-in:
(function ($) {
  $.fn.logId = function() {
    // The result of the 'each' function is returned - the result is just 'this'
    // - where 'this' is the jQuery object - this means that the logId function
    // is chainable.
    return this.each(function() {
      // 'this' here is a reference to the current DOM element
      console.log(this.id)
    })
  }
})(jQuery)
