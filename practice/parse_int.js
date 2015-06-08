#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function do_base(num, base) {
    greenw("base " + base + ": ")
    yellow(parseInt(num, base))
}

function do_bases(num) {
    greenw("num: ")
    yellow(num)
    do_base(num, 10)
    do_base(num, 8)
    do_base(num, 16)
    log()
}

do_bases("27", 27)
do_bases("033", 033)
do_bases("0x1B", 0x1B)