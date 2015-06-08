#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


var symbol_table = {"var": {}, "=": {}, ";":{}, "true": {}, "(":{}, ")":{}, "{": {}, "}": {}, "!":{}, "else": {}, "if": {}},
    code

// advance() advances to the given token or to the next token if no token is given

function advance(token) {
    var tkn, index, next_char

    if (token) {
        tkn = ""
        while (tkn !== token) {
            tkn = advance()
        }
    }
    else {
        index = 0
        tkn = code.substr(index++, 1)
        next_char = code.substr(index, 1)

        while (!symbol_table[tkn] && !symbol_table[next_char] && index < code.length) {
            tkn += code.substr(index++, 1)
            next_char = code.substr(index, 1)
        }
    }
    code = code.substr(index)
    return tkn
}

code = "var robin = true; if (robin) { console.log(!!true); }"


function parse() {
    js = ""
    var next = advance()
    while (next) {
        js += next
        next = advance()
    }
    return js
}

eval(parse())