#!/usr/bin/env node

/* Prototype-chaining method of inheritance, using apply() method to return an instance of the object, created by the
parent constructor, then using extend() method to copy own properties onto the resultant object. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* 'Class' definitions */

function Animal(sound) {
    this.sound = sound
    this.ubername = (function() {
        if (this.uber) {
            return this.uber
        }
        else {
            return 'robin'
        }
    }).apply(this).name
}
Animal.prototype.name = 'Animal'
Animal.prototype.say = function() { return "" + this.name + " makes '" + this.sound + "' sound." }

function Person() {
    Animal.apply(this, arguments)
}
// Inheriting only the prototype of Animal, rather than new Animal()
extend2(Person, Animal)
Person.prototype.constructor = Person
Person.prototype.name = 'Person'

function Man() {
    Person.apply(this, arguments)
}
// Inheriting only the prototype of Person, rather than new Person()
extend2(Man, Person)
Man.prototype.constructor = Man
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