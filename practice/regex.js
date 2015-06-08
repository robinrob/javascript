#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

do_match("robinbukosmith", /buko/)

do_match("blah blah rotate(27deg) blah blah", /rotate[()a-z0-9]*/)

// Try to match the numbers within a string: this is wrong
do_match("abc123def", /[0-9]*/)

// This matches 3 digits
do_match("abc123def", /[0-9]{3}/)

// This matches 3, 2 or 1 digits
do_match("abc123def", /([0-9]{3})|([0-9]{2})|([0-9]{1})/)

function do_match(str, regexp) {
    match = str.match(regexp)

    yelloww("string: " + str + ", ")
    blue("regexp: " + regexp)
    logw("match result: ");
    log(match)

    if (match) {
        logw("matched text: ")
        green(match[0])
    }
    log("")
}