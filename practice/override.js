#!/usr/bin/env node


function Person(name, age) {
	this.name = name
	this.age = age
}

// print_obj(new Person())

Person.prototype.name = "Robin",
Person.prototype.age = 27,
Person.prototype.say = function() {
	console.log('Hello i am ' + this.name + ' and i am ' + this.age + ' years old.')
}

// print_obj(new Person())

person = new Person("LA", 28)
person.say()

function print_obj(obj) {
	for (key in obj) {
		console.log("" + key + ": " + obj[key])
	}
}