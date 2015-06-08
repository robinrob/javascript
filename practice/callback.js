#!/usr/bin/env node

function a() {
	return 1
}

function b() {
	return 2
}

function add(a, b) {
	return a() + b()
}

// Functions are called back
console.log(add(a, b))
// Anonymous functions
console.log(add(function() { return 1 }, function() { return 2 }))