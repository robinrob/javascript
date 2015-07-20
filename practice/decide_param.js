#!/usr/bin/env node

function toBoolean(boolOrStr) {
    if (boolOrStr === true || boolOrStr === "true") {
        return true
    }
    else {
        return false
    }
}

function toBoolString(bool) {
    if (bool === true || bool === "true") {
        return "true"
    }
    else if (bool === false || bool === "false") {
        return "false"
    }
}

function decideParam(options) {
    for (var index = 0; index < options.length; ++index) {
        if (index === (options.length - 1)) {
            return toBoolean(options[index])
        }
        else if (toBoolString(options[index])) {
            return toBoolean(options[index])
        }
    }
}

var choice = decideParam([undefined, "blurgh", "true"])
console.log("choice: " + choice)