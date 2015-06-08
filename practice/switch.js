#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function do_switch(val) {
    switch (val) {
        case 'Robin':
            green('Robin!')
            break;
        default:
            red("I don't know.")
            break;
    }
}

do_switch("Robin")
do_switch("Smith")