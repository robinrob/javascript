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
extend2(Person, Animal)
Person.prototype.name = 'Person'

// 'Man' specifies own properties in constructor
function Man(age) {
//	this.name = 'Man'
//	this.age = age
}

// Inheriting only the prototype of Person, rather than new Person()
extend2(Man, Person)
Man.prototype.name = 'Man'
/* -------------------------------------------------- */


/* -------------------------------------------------- */
/* `extend2` function */

function extend2(Child, Parent) {
    var p = Parent.prototype
    var c = Child.prototype
    for (var i in p) {
        /* When property is primitive, this creates a copy of the property on the child. When property is array or
        object, a reference to the property is copied. */
        c[i] = p[i]
    }
    c.uber = p
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