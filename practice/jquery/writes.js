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
