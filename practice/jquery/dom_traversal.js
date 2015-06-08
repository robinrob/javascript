document.write("<br>")

var descendents = $("div").find("article")
document.write("div article descendents: " + descendents.size() + "<br>")

var children = $("div").children("article")
document.write("div article children: " + children.size() + "<br>")

var siblings = $("div > article").siblings("article")
document.write("div > article siblings: " + siblings.size() + "<br>")

var nextAll = $("div > article").first().nextAll()
document.write("div > first article nextAll: " + nextAll.size() + "<br>")

var siblingsAndSelf = $("div > article").siblings().andSelf()
document.write("div > first article siblingsAndSelf: " + siblingsAndSelf.size() + "<br>")

document.write("parents of baby: " + $("#baby").parents().size() + "<br>")

document.write("parents of baby until div: " + $("#baby").parentsUntil("div").size() + "<br>")
