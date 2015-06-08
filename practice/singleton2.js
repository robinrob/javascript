#!/usr/bin/env node

/* This is an improvement on the previous singleton pattern because the single_instance property is no longer publicly
* exposed. */

require(process.env.JS_LIB_HOME + '/log')

function Logger() {
    if (typeof Logger._single_instance === "undefined") {
        Logger._single_instance = this;
    }
    return (function () { return Logger._single_instance })()
}


var a = new Logger()
var b = new Logger()

logo({"a === b": a === b})
