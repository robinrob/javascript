#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


function robin(spec) {
    var that = person(spec)
        msg = "Hello i am Robin!"
        speak = function() {
            cyan(that.msg)
        }

    that.uber = person.name
    that.msg = msg
    that.speak = speak
    return that
}

function person(spec) {
    var that = spec
    return that
}


spec = {name: 'person', type: 'human'}

robin = robin(spec)

logo(robin)

robin.speak()

robin.msg = "This is awesome inheritance!"

robin.speak()