#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

function pushParticle(particles) {
    particles.push(1.0)
    particles.push(2.0)
    particles.push(3.0)
    particles.push(4.0)
    particles.push(5.0)
    particles.push(6.0)

    return particles
}

function printParticles(particles) {
    for (var i = 0; i < particles.length; i = i + 6) {
        log("posX: " + particles[i + 0])
        log("posY: " + particles[i + 1])
        log("posZ: " + particles[i + 2])
        log("velX: " + particles[i + 3])
        log("velY: " + particles[i + 4])
        log("velZ: " + particles[i + 5])
    }
}

var particles = []

for (var i = 0; i < 3; ++i) {
    pushParticle(particles)
}

printParticles(particles)