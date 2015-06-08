#!/usr/bin/env node

/* Prototype-chaining method of inheritance, using apply() method to return an instance of the object, created by the
parent constructor. This also solves the problem of shared property changes on children affecting parents. However,
in this current form, each parent constructor is called twice. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* 'Class' definitions */

function Animal(sound) {
    this.sound = sound
}
Animal.prototype.name = 'Animal'
Animal.prototype.say = function() { return "" + this.name + " makes '" + this.sound + "' sound." }

function Person() {
    Animal.apply(this, arguments)
}
// Inheriting only the prototype of Animal, rather than new Animal()
Person.prototype = new Animal()
Person.prototype.constructor = Person
Person.prototype.name = 'Person'

function Man() {
    Person.apply(this, arguments)
}
// Inheriting only the prototype of Person, rather than new Person()
Man.prototype = new Person()
Man.prototype.constructor = Man
Man.prototype.name = 'Man'
/* -------------------------------------------------- */


var man = new Man('Hello World!')

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
var person = new Person('dum de dum')

var animal = new Animal('woof')

cyan('animal:')
logo(animal)
red(animal.say())
log()

cyan('person:')
logo(person)
red(person.say())
log()

cyan('man:')
logo(man)
red(man.say())