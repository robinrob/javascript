#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function generateParticle() {
    return {
            posX: Math.random(),
            posY: Math.random(),
            pozZ: Math.random(),
            velX: Math.random(),
            velY: Math.random(),
            velZ: Math.random()
    }
}

var particles = []

for (var i = 0; i < 3; ++i) {
    particles.push(generateParticle())
}

log(particles)
