#!/usr/bin/env node

"use strict"

let a = 'world';
let b = 'hello';

console.log('a: ' + a);
console.log('b: ' + b);

[a, b] = [b, a];

console.log('a: ' + a);
console.log('b: ' + b);
