#!/usr/bin/env node

"use strict"

let me = ['Robin', 29]

let [name, age] = me
console.log(name, age)

let today = {m: 12, d: 4, y: 2014}

let {m: month, d: day} = today

console.log(month, day)
