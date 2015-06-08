#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

// Two equivalent ways to create a new object:

green("{}: " + {})

green("new Object(): " + new Object())

var obj = {}

var constr = obj.constructor

green("object.constructor: " + constr)

var obj2 = constr()

green("obj2: " + obj2)


function Bicycle(type, owner) {
    this.type = type
    this.owner = owner
    this.speech = function() { return "Hello i am a " + this.type + " bike and my owner is " + this.owner
        + ", move out of my fucking way" }
    this.say = function() {
        console.log(this.speech())
    }
}

function doBikeSay(bike) {
    logo({"bike.speech()": bike.speech()})
}

bike = new Bicycle("folding", "Robin Smith")
doBikeSay(bike)

logo({"bike.constructor": bike.constructor})

bike2 = new bike.constructor("mountain", "Eeya Bin")
doBikeSay(bike2)