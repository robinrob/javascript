#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

var fun = function() {
  log("fun's name: " + arguments.callee.name)
}

function fun2() {
  log("fun2's name: " + arguments.callee.name)
}

a = {
  myFun: function wanker() {
    log("a.myFun's name: " + arguments.callee.name)
  }
}

fun()

fun2()

a.myFun()
