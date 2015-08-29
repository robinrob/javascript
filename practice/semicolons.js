#!/usr/bin/env node

/* This will give an error because the 'require' statement is immediately followed by a '(' character, which is
 not a syntax error and therefore the interpreter will not automatically insert a semicolon.
 http://inimino.org/~inimino/blog/javascript_semicolons
 */

/* The right way: */
require(process.env.JS_LIB_HOME + '/log');

(function () {
    log("Hello World!")
})()

/* The wrong way: */
require(process.env.JS_LIB_HOME + '/log')

(function () {
    log("Hello World!")
})()
