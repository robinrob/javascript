#!/usr/bin/env node

var sum = function(a, b) {return a + b;}
var add = sum;
delete sum

console.log(typeof sum)
console.log(typeof add)
console.log(typeof add(1,2))
console.log(typeof sum(1,2))