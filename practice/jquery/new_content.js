var hello = $("<div></div>", {
  "text": "Hello",
  "class": "hello"
})

$("body").append(hello)

$("<div>Bye</div>").appendTo(hello)
