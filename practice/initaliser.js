#!/usr/bin/env node

// Example of using an 'initialiser' ('inner') function within a function.
// The outer function 'a' returns a reference to 'actualWork' which can be later called.

var a = function() {
  function someSetup(){
    var setup = 'done';
  }
  function actualWork() {
    console.log('Worky-worky');
  }
  someSetup();
  return actualWork;
}();

a()
