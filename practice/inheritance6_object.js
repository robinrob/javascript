#!/usr/bin/env node

/* Constructor functions can be avoided completely - just use objects. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* Object definitions */

Object.prototype.extend = function(extendPrototype) {
    var hasOwnProperty = Object.hasOwnProperty
    var object = Object.create(this)

    for (var property in extendPrototype) {
        if(hasOwnProperty.call(extendPrototype, property) || typeof object[property] === 'undefined') {
            object[property] = extendPrototype[property]
        }
    }
    return object
}

var ship = {
    manufacture: function(shields) {
        var newShip = Object.create(this)
        newShip.shields = shields
        return newShip
    },
    health: 100,
    shields: 50,
    guns: [{
        damage: 20,
        speed: 5
    },{
        damage: 5,
        speed: 9000
    }],
    fire: function() {
        console.log('PEW PEW')
    }
}

var newShipModel = ship.extend({
    health: 200,
    shields: 100,
    fire: function() {
        console.log('TRIPLE PEW!!!')
    }
})
/* -------------------------------------------------- */


var oldShip = ship.manufacture(100)
var newShip = newShipModel.manufacture(150)

cyan("oldShip:")
logo(oldShip)
log()

cyan("newShip:")
logo(newShip)
log()

log(JSON.stringify(oldShip))