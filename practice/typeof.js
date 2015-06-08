#!/usr/bin/env node

require(process.env.JS_LIB_HOME + "/colors.js")

n = 27
s = "twenty-seven"
t = true
o = {name: "Robin Smith", age: 27}
a = [n, s, t, o]
nl = null
u = undefined

types = [n, s, t, o, a, nl, u]

for (var i in types) {
    console.log(("type: " + typeof types[i]).green)
    console.log(types[i])
}