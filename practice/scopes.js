#!/usr/bin/env node

"use strict"; 

var global = 1;

function f1() {
  global++;
  return global;
}

function f2() {
  var global=0
  return global;
}

var a = 123;

function f4() { 
  console.log(a)
  var a = 1;
  console.log(a)
  var b = 2
} 

console.log(f1())
console.log(f2())
f4()
console.log(a)


{
if (true) {
  var c = 4
  console.log(c)
}
} 

console.log(c)

