#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function Parent(name) {}
Parent.prototype = {
    constructor: Parent,
    name: 'Parent',
    children: [],
    toString: function() { return this.name }
}

function Child(name) {
    this.name = name
    Child.uber.children.push(this)
}
var mother = new Parent()
Child.prototype = mother
Child.uber = Parent.prototype
Child.prototype.constructor = Parent

new Child('Robin')
new Child('Smith')
new Child('Alma')
new Child('Lorenzo')

cyan('mother: ' + mother)
logo(mother)
log()

var mother2 = new Parent()
cyan('mother2: ' + mother2)
logo(mother2)