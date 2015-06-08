#!/usr/bin/env node


function Person(name, age) {
	this.name = name,
	this.age = age,
	this.say = function() {
		console.log('Hello i am ' + this.name + ' and i am ' + this.age + ' years old.')
	}
}

person = new Person('Robin', 'age')

console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("age"))
console.log(person.hasOwnProperty("toString"))