#!/usr/bin/env node

// These two methods of declaring a function are exactly the same:

function f() { console.log("Hello World!") }

var g = function() { console.log("Hello World!") }

f()
g()

console.log(typeof f)
console.log(typeof g)