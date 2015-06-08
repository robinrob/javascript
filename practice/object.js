#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

logo(Object)

logo({hello: "Robin"})

obj = {}
log(obj['hello'])