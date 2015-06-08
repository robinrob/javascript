#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function generateParticle() {
    return {
        position: {
            x: Math.random(),
            y: Math.random(),
            z: Math.random()
        },
        velocity: {
            x: Math.random(),
            y: Math.random(),
            z: Math.random()
        }
    }
}

var particles = []

for (var i = 0; i < 3; ++i) {
    particles.push(generateParticle())
}

log(particles)