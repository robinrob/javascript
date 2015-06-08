#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

/* Primitives are passed by value. */

a = 1
b = a
b = 2

logo({a: a})
logo({b: b})
log()

/* However, objects and arrays are passed by reference. */

a = {c: 1, d: 2}
b = a
b.c = 3
b.d = 4

cyan("a:")
logo(a)
cyan("b:")
logo(b)
log()

a = [1, 2]
b = a
b[0] = 3
b[1] = 4

logo({a: a})
logo({b: b})