#!/usr/bin/env node

function Animal() {
	this.name = "Animal"
	this.say = function() {
		console.log("Hello i am " + this.name)
	}
}

function Person() {
	this.name = "Person"
}

Person.prototype = new Animal()

function Man() {
	this.name = "Legend"
	this.gender  = "Male"
}

Man.prototype = new Person()

animal = new Animal()
animal.say()

person = new Person()
person.say()

man = new Man()
man.say()

console.log("__proto__ of Man is: " + man.__proto__)
console.log("__proto__ of Person is: " + person.__proto__)
console.log("__proto__ of Animal is: " + animal.__proto__)