#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function Shape() {
//    this.type = Shape
//    this.getType = function() { return this.type }
}
Shape.prototype = {type: "Shape", getType: function() { return this.type }}
Shape.prototype.constructor = Shape

function Triangle(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
    this.type = "Triangle"
    this.getPerimeter = function() { return this.a + this.b + this.c }
}

var shape = new Shape()
Triangle.prototype = shape
Triangle.prototype.constructor = Triangle

var tri = new Triangle(1, 2, 3)
logo({'tri.constructor': tri.constructor})

//logo({'tri.constructor.prototype.constructor': tri.constructor})

logo({'shape.isPrototypeOf(tri)': shape.isPrototypeOf(tri)})

logo({'tri.getPerimeter()': tri.getPerimeter()})

logo({'tri.getType()': tri.getType()})

cyan("tri own properties:")
logop(tri)