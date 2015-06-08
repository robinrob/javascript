#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

try {
    iamnotdefined
}
catch (e) {
    red(e)
}
finally {
    green("Error successfully caught!")
}