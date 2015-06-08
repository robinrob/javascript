#!/usr/bin/env node

var robin = {
	name: 'Robin',
	say: function() {
		return 'Hello, i am ' + this.name
	}
}

var batman = {
	name: 'Batman',
	say: robin.say
}

console.log(batman.say())

console.log(robin.say.call(batman))