#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

// These are the same
log("Robin".green)
log("Robin"['green'])


obj = { a: "a", b: function() { return "b" } }

log(obj['a'])
log(obj['b']())