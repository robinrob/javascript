#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function getRotationStyle(element) {
    transform = element.style.transform
    rotation = transform.match(/rotate[()0-9a-z]*/)
    return rotation[0]
}

function getRotation(element) {
    style = getRotationStyle(element)
    return style.match(/([0-9]{3})|([0-9]{2})|([0-9]{1})/)[0]
}

element = {style: {transform: "blah blah rotate(27deg) blah blah"}}

log(element)
log(element.style)
log(element.style.transform)
green(getRotationStyle(element))
green(getRotation(element))