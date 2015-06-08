#!/usr/bin/env node

/* 'Parasitic' inheritance. */

require(process.env.JS_LIB_HOME + '/log')

/* -------------------------------------------------- */
/* Object definitions */

/* This combines the method of prototypal inheritance with copying object properties, to inherit shared properties and
add new properties. .*/
function objectPlus(o, stuff) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;

    for (var i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}

function ship() {
    var stuff = {
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
    return objectPlus({}, stuff)
}

function newShipModel() {
    var stuff = {
        health: 200,
        shields: 100,
        fire: function () {
            console.log('TRIPLE PEW!!!')
        }
    }
    return objectPlus(ship(), stuff)
}
/* -------------------------------------------------- */


var oldShip = ship().manufacture(100)
var newShip = newShipModel().manufacture(150)

cyan("oldShip:")
logo(oldShip)
log()

cyan("newShip:")
logo(newShip)
log()

log(JSON.stringify(oldShip))