#!/usr/bin/env node

"use strict"

var a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


function fetch1() {
  return Promise.resolve('Robin')
}

function fetch2() {
  return 'Smith'
}

function fetch3() {
  return new Promise((resolve, reject) => resolve(30))
}

async function run() {
  return Promise.all([
    fetch1(),
    fetch2(),
    fetch3()
  ])
}

run().then(function(values) {
  console.log('values: ' + JSON.stringify(values, null, '\t'))
})

async function run2() {
  let values = await run()
  console.log('values: ' + JSON.stringify(values, null, '\t'))
}
run2()

