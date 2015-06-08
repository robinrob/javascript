#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

// This shows an implementation of an `uber` method - similar to `super` from other languages.

// Define Shape constructor
function Shape() {}

// Augment prototype
Shape.prototype.name = 'Shape'
Shape.prototype.toString = function() {
    var uber = this.constructor.uber

    return uber ? uber.toString() + ', ' + this.name : this.name
}


// Define TwoDShape constructor
function TwoDShape() {}
// Take care of inheritance
var F = function() {}
F.prototype = Shape.prototype
TwoDShape.prototype = new F()
TwoDShape.prototype.constructor = TwoDShape

TwoDShape.uber = Shape.prototype
// Augment prototype
TwoDShape.prototype.name = '2D Shape'


// Define Triangle constructor
function Triangle(side, height) {
    this.side = side
    this.height = height
}

// Take care of inheritance
var F = function() {}
F.prototype = TwoDShape.prototype
Triangle.prototype = new F()
Triangle.prototype.constructor = Triangle
Triangle.uber = TwoDShape.prototype

// Augment prototype
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function() { return (this.side * this.height) / 2 }

tri = new Triangle(3, 9)
console.log(tri.toString())
console.log(tri.name)
console.log(tri.getArea())