#!/usr/bin/env node

"use strict"

var a = null

# Before ES6 you could do this if you wanted a piece of block-scoped code ...!
try{throw 2}catch(a){
    console.log( a ); // 2
}

console.log(a)

{
  let a = 2
  console.log(a)
}

console.log(a)
