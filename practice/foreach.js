#!/usr/bin/env node

arr = ['I', 'am', 'Robin', '!']

arr.forEach(function(elem) { console.log(elem) })

console.log()

arr.forEach(function(elem, i) {
  console.log(i)
  console.log(elem)
})

console.log()

arr.forEach(function(elem, i, arr) {
  console.log(i)
  console.log(elem)
  console.log(arr)
})
