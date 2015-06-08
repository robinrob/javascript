#!/usr/bin/env node

var global = 1;

function f1() {
  global++;
  return global;
}

function f2() {
  var global=0
  return global;
}

function f3() {
	msg="Hello from f3()!"
}

var a = 123;
function f4() { 
  console.log(a)
  var a = 1;
  console.log(a)
} 

console.log(f1())
console.log(f2())
f3()
console.log(msg)
f4()
