#!/usr/bin/env node

/* Prototype-chaining method of inheritance, but inheriting the prototype of parent only and using a temporary
* constructor in-between - this solves the problem of shared property changes on children affecting parents */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* 'Class' definitions */

function Animal() {}
var F = function() {}
F.prototype.name = 'Animal'
F.prototype.toString = function() { return this.name }
Animal.prototype = new F()

function Person() {}

// Inheriting only the prototype of Animal, rather than new Animal()
extend(Person, Animal)
Person.prototype.name = 'Person'

// 'Man' specifies own properties in constructor
function Man(age) {}

// Inheriting only the prototype of Person, rather than new Person()
extend(Man, Person)
Man.prototype.name = 'Man'
/* -------------------------------------------------- */


/* -------------------------------------------------- */
/* `extend` function */

function extend(Child, Parent) {
    // This creates a lookup for every property to the parent.
    var F = function(){}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.uber = Parent.prototype
}
/* -------------------------------------------------- */


var man = new Man(27)

// Results are the same:
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