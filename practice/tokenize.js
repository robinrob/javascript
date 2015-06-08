#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


var symbol_table = {"{": {}, "}": {}, "Robin": {}, "Smith": {}}

var tokenize = function(code) {
    var chars = code.split("")
    var tokens = []

    while (chars.length > 0) {
        var tkn = ""
        var char = ""
        while (!symbol_table[tkn] && chars.length > 0) {
             char = chars.shift()
            if (char.trim()) {
                tkn += char
            }
        }
        tokens.push(tkn)
    }
    return tokens
}

log(tokenize("{Robin Smith}"))