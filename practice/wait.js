#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

//process.nextTick(fun)

setTimeout(function() {red("Hello")}, 0)
setTimeout(function() {yellow("Hello")}, 300)
setTimeout(function() {green("Hello")}, 600)
setTimeout(function() {blue("Hello")}, 900)
