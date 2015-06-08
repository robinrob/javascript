var hello = $("<div></div>", {
  "text": "Hello",
  "class": "hello",
  "title": "Hello"
});

var bye = $("<div></div>", {
  "text": "Bye",
  "class": "bye",
  "title": "Bye"
});


$("body").after(hello)

// Alternate syntax
$(hello.clone()).insertAfter("body")


$(".hello").after(bye)
