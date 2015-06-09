function writePara(str) {
  $("body").append(str + "<br><br>")
}

function writeLine(str) {
  $("body").append(str + "<br>")
}

function write(str) {
  $("body").append(str)
}

function writeObj(obj) {
  writePara(JSON.stringify(obj))
}

function writeHeading(str) {
  $("body").append("<h1>" + str + "</h1>")
}

(function($) {
  var ajaxCall = function(url, options, pagination) {
    var data = {}
    if (pagination) {
      data.page = options.page
      data.per_page = options.per_page
    }

    return $.ajax({
      url: "http://api.dribbble.com" + url,
      dataType: "jsonp",
      data: data
    }).done(options.callback)
  }

  var getParams = function(defaults, options) {
    return $.extend({}, defaults, options)
  }

  var defaults = {
    id: "",
    callback: function() {},
    per_page: 15,
    page: 1
  }

  $.dribbble = {
    getShot: function(options) {
      var params = getParams(defaults, options)
      ajaxCall("/shots/" + params.id, params, false) 
    },

    getShots: function(options) {
      // Naming follows the Dribbble API documentation! This is a good convention.
      var params = getParams(defaults, options)
      ajaxCall("/shots/everyone", params, true)
    },

    getPlayerShots: function(options) {
      var params = getParams(defaults, options)
      ajaxCall("/players/" + params.id + "/shots", params, true);
    }
  }
})(jQuery)
