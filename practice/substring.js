#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

green("Robin Smith".substr(6,5))

str = "#abcdef"

green(str.substr(1,2))
green(str.substr(3,2))
green(str.substr(5,2))


logo({"'Robin'.substr(2)": 'Robin'.substr(2)})