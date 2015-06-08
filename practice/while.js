#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

var i = 0

while (i < 10) {
	green(i)
	i++
}