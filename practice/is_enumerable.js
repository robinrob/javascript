#!/usr/bin/env node


function Person(name, age) {
	this.name = name,
	this.age = age,
	this.say = function() {
		console.log('Hello i am ' + name + ' and i am ' + age + ' years old.')
	}
}

console.log('prototype: ' + Person.prototype)