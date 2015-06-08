#!/usr/bin/env node

// call' is a property of function objects
log(typeof this.call)
log(typeof {}.call)
log(typeof function(){}.call)


// 'call' can be used to replace a function context ('this') with a reference to another context.
var b = function b() {
	console.log(this.msg)
}

function otherFunction() {
	this.msg = "Context from otherFunction!"
	return this
}

function log(msg) {
	console.log(msg)
}

this.msg = "Var from Global context"
b.call(this)

b.call(otherFunction())