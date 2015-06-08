#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function Gadget() {
    this.price = 100
    this.rating = 3
    this.getInfo = function() {
        return 'Rating: ' + this.rating + ', price: ' + this.price;
    }
}

Gadget.prototype = {
    price: 100,
    rating: 3,
    getInfo: function() {
        return 'Rating: ' + this.rating + ', price: ' + this.price;
    }
}

var newtoy = new Gadget()

logo({'newtoy.constructor': newtoy.constructor})