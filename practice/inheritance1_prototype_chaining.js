#!/usr/bin/env node

/* Prototype-chaining method of inheritance. */

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
function Man(age) {
	this.name = 'Man'
	this.age = age
}

Man.prototype = new Person()
Man.prototype.constructor = Man
/* -------------------------------------------------- */


/* Object creations */
var man = new Man(27)

logo({'man instanceof Animal': man instanceof Animal})
logo({'man instanceof Person': man instanceof Person})
logo({'man instanceof Man': man instanceof Man})
log()


logo({'Animal.prototype.isPrototypeOf(man)': Animal.prototype.isPrototypeOf(man)})
logo({'Person.prototype.isPrototypeOf(man)': Person.prototype.isPrototypeOf(man)})
logo({'Man.prototype.isPrototypeOf(man)': Man.prototype.isPrototypeOf(man)})
log()

// Problem with using shared prototype:
var person = new Person()

var animal = new Animal()

cyan('animal:')
logo(animal)
log()

cyan('person:')
logo(person)
log()

cyan('man:')
logo(man)