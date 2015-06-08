#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')



a = {
  myFun: function(arg1, arg2) {
    log("myFun: " + arg1 + ", " + arg2)
    log("myFun: myVar: " + this.myVar)
  },

  myVar: 5,

  myVar2: this.myVar
}

b = { 
  myVar: 10
}

a.myFun.call(b, 'arg1', 'arg2')
