#!/usr/bin/env node

/* Here is a method for implementing a singleton pattern. However, the single_instance property of the Logger function
* is publicly visible and can therefore be modified. */

require(process.env.JS_LIB_HOME + '/log')

function Logger() {
    if (typeof Logger.single_instance === "undefined") {
        Logger.single_instance = this;
    }
    return Logger.single_instance;
}

var a = new Logger()
var b = new Logger()

logo({"a === b": a === b})