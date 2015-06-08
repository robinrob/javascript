#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function extend(Child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

var ship = {
    manufacture: function(shields) {
        var newShip = Object.create(this);
        newShip.shields = shields;
        return newShip;
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
        console.log('PEW PEW');
    }
};

var newShipModel = ship.extend({
    health: 200,
    shields: 100,
    fire: function() {
        console.log('TRIPLE PEW!!!');
    }
});


var oldShip = ship.manufacture(100);
var newShip = newShipModel.manufacture(150);

cyan("oldShip:")
logo(oldShip)
log()

cyan("newShip:")
logo(newShip)
log()

log(JSON.stringify(oldShip))