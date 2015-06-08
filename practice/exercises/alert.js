#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

// What does this code log?

var a = 1

function f() {
    function n() {
        log(a)
    }
    var a = 2
    n()
}

f()