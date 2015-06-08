#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function check(val) {
	var o = {}
	o["" + val] = val? true : false 
	logo(o, "cyan", "yellow")
}

check(true)
check(false)
check(undefined)
check(null)
check(1)
check(-1)
check(0)
check(NaN)
check(Infinity)
check("string")
check("")
check({})