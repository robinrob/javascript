#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/colors')
require(process.env.JS_LIB_HOME + '/log')

arr = [1,2,3]

function print_all(args) {
	log(arr.join(" "))
}

print_all(arr)