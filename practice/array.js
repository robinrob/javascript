#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


arr = ["Robin", "Smith", 27, true]

logo({array: arr})

logo({"array.length": arr.length})

arr.push("addition")
logo({"array.push(addition)": arr})

arr.pop()
logo({"array.pop()": arr})

arr.shift()
logo({"array.shift()": arr})

arr.unshift("Robin")
logo({"array.unshift()": arr})

// Sub-array:

logo({"array.slice()": arr.slice()})