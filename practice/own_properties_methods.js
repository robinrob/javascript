#!/usr/bin/env node

/* Prototype-chaining method of inheritance, and two different ways to specify own properties. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* 'Class' definitions */

function Animal() {
    this.name = 'Animal'
    this.toString = function() { return this.name }
}

function Person() {
    this.name = 'Person'
}

Person.prototype = new Animal()
Person.prototype.constructor = Person

// 'Man' specifies own properties in constructor
function Man(name, age) {
	this.name = name
	this.age = age
}

Man.prototype = new Person()
Man.prototype.constructor = Man

// 'Woman specifies own properties using augmented prototype
function Woman() {}

var proto = new Person()
proto.name = "LA"
proto.gender = "Female"
proto.age = 28
proto.constructor = Woman
Woman.prototype = proto
/* -------------------------------------------------- */


/* Object creations */
var animal = new Animal()
log("animal (" +  animal.constructor.name + "):")
logo(animal)
log()

var person = new Person()
log("person (" +  person.constructor.name + "):")
logo(person)
log()

var alma = new Woman()
log("alma (" +  alma.constructor.name + "):")
logo(alma)
log()

var robin = new Man("Robin", 27)
log("robin (" +  robin.constructor.name + "):")
logo(robin)