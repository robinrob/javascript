#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


var a1 = function() {
  this.myFun = function(arg1, arg2) {
    log("a1.myFun: " + arg1 + ", " + arg2)
  }
}

var a = function() {
  this.objs = [new a1(), new a1()]

  this.each = function(funName, args) {
    this.objs.forEach(function(obj) {
      obj[funName].apply(obj, args)
    })
  }
}


new a().each('myFun', ['arg1', 'arg2'])
