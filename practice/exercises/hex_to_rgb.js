#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function hex_to_rgb(str) {
    greenw(parseInt("0x" + str.substr(1,2)) + ", ")
    greenw(parseInt("0x" + str.substr(3,2)) + ", ")
    greenw(parseInt("0x" + str.substr(5,2)))
}

hex = "#00FF00"

hex_to_rgb(hex)