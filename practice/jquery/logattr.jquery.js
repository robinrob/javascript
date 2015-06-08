(function($) {
  function optionOrDefault(options, defaults, param) {
    return options[param] || defaults[param]
  }

  $.fn.logAttr = function(options) {
    var defaults = {
      attr: "id",
      backup: "N/A",
      useAlert: false
    }
    // Built-in jQuery method to combine options + defaults
    var params = $.extend({}, defaults, options)
    var attr = params.attr
    var backup = params.backup
    var useAlert = params.useAlert

    return this.each(function() {
      var str = $(this).attr(attr)|| backup
      useAlert ? alert(str) : console.log(str)
    })
  }
})(jQuery)
