#!/usr/bin/env node

var a = {one: 1, two: 2}

keys = Object.keys(a)

console.log('keys: ' + JSON.stringify(keys, null, '\t'))
