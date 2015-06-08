#!/usr/bin/env node

function a() {
  console.log("Hello")
  return function(){
    console.log("World!"); 
  };
}

a()()

// Function re-writing itself
a = a()
a()
a()

// var myfunc = function(){
//     console.log(this.name);
// };
//
// var obj_a = {
//     console.log("FOO!");
// };
//
// var obj_b = {
//     name:  "BAR!!"
// };
//
// myfunc.call(obj_a);