#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

a = [1, 2, 3, 4, 5]

log(a)

a.remove(a[3])

log(a)
