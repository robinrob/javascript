#!/usr/bin/env node


function runCallback(callback) {
  callback()
}

runCallback(function namedCallback() {
  console.log("Ran!")
})

runCallback(namedCallback)
