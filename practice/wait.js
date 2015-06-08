#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

//process.nextTick(fun)

setTimeout(red("Hello"), 0)
setTimeout(yellow("Hello"), 300)
setTimeout(green("Hello"), 600)
//setTimeout(blue("Hello"), 900)