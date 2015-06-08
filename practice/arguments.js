#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function args() {
//  Note that `arguments` object is not an array! It's an array-like object.
	logo(arguments)
}

args("Hello", "i", "am", 27, "not", Infinity, "nor", NaN)