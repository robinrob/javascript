#!/usr/bin/env node

"use strict"

var delay = 100

for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log("Loop 1: " + i);
    }, i*delay );
}

# Using let gives us a new variable for each iteration of the loop,
# which the timer() function can close over
for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log("Loop 2: " + i);
    }, i*delay );
}

console.log('DONE')
