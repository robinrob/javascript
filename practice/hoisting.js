#!/usr/bin/env node

foo()

var foo

function foo() {
  console.log("foo")
}

foo = function foo() {
  console.log("foo2")
}

// function foo() {
//   console.log("foo3")
// }

