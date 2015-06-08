#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

msg = "Hello World!"
green(msg)
greenw(msg)
greens([msg])

yellow(msg)
yelloww(msg)
yellows([msg])

red(msg)
redw(msg)
reds([msg])

blue(msg)
bluew(msg)
blues([msg])

greenw("Hello")
yelloww(" World")
bluew("!")

log("")