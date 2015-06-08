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

var settings = {
  url: "package.json",
  type: "GET",
  dataType: "json",
  success: function(data) {
    writeHeading("Method 1 - .ajax - success")
    writeLine("asynchronous :(")
    writeObj(data)
  }
}


// --------------------------------------------------------------------------------------
// Method 1 - .ajax
// --------------------------------------------------------------------------------------
$.ajax(settings)
writeLine("synchronous :)")

// Even though an error method was provided, the error is still
// thrown - the method just allows you to display additional
// information.
var settings2 = {
  url: "fdsfs",
  type: "GET",
  dataType: "json",
  success: function(data) {
    writeHeading("Method 1 - error function - success")
    writeObj(data)
  },
  // jqXHR = jQuery XmlHttpRequest - this is a wrapper object on the standard
  // XmlHttpRequest object.
  error: function(jqXhr, status, errorThrown) {
    writeHeading("Method 1 - .ajax - error")
    write("jqXhr: ")
    writeObj(jqXhr)
    write("status: ")
    writeObj(status)
    write("errorThrown: ")
    writeObj(errorThrown)
  } 
}
$.ajax(settings2)


// --------------------------------------------------------------------------------------
// Method 2 - .getJSON
// --------------------------------------------------------------------------------------
//
// Shortcut to above. However getJSON only supports defining a function if the
// Ajax request succeeded. You might decide this is acceptable, but it is
// best practice to deal with errors, so best practice is to use $.ajax
// directly, so that you can define an error handler.
$.getJSON("package.json", function(data) {
  writeHeading("Method 2 - .getJSON - success")
  writeObj(data)
})


// --------------------------------------------------------------------------------------
// Method 3 - req object
// --------------------------------------------------------------------------------------
var settings4 = {
  url: "package.json",
  type: "GET",
  dataType: "json",
}
var req = $.ajax(settings4)
req.done(function(response, status, jqXHR) {
  writeHeading("Method 3 - req object - done")
  writeObj(response)
});
req.done(function(response, status, jqXHR) {
  writeHeading("Method 3 - req object - done - SECOND callback!!")
  writeObj(response)
});
req.fail(function(jqXHR, status, errorThrown){
  // Do something
})
req.always(function(){
  // Arguments passed to always are the same as those passed to either done()
  // or fail() - depending on whether the request was a success or not.
  writeHeading("Method 3 - use req object - always")
})
