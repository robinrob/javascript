#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function Person(name, age) {
	this.name = name,
	this.age = age,
	this.say = function() {
		console.log('Hello i am ' + this.name + ' and i am ' + this.age + ' years old.')
	}
}

robin = new Person('Robin', 27)
robin.say()

logo({'robin.constructor': robin.constructor})
logo({'robin.prototype': robin.prototype})
logo({'robin.constructor.prototype': robin.constructor.prototype})
logo({'robin.hasOwnProperty(name)': robin.hasOwnProperty('name')})
logo({'robin.hasOwnProperty(age)': robin.hasOwnProperty('age')})
logo({'robin.hasOwnProperty(say)': robin.hasOwnProperty('say')})