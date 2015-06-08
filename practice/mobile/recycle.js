// 
// Our step function called on each Request Animation Frame (RAF)
//

// in this step we recycle our particle
demo.recyclingStep = function( particles ) {

    var i;

    for (i = 0; i < demo.settings.rate; i++) {

        var min = -10,
            max = 10,
            velx = min + Math.random() * (max - min),
            vely = min + Math.random() * (max - min),
            w = demo.settings.size,
            h = demo.settings.size,
            life = demo.settings.life;

        particles.getFree()
            .setup( demo.settings.width * 0.5, demo.settings.height * 0.5, w, h, life )
            .setVel( velx, vely );
    }

    for (i = 0; i < particles.elements.length; i++) {

        var particle = particles.elements[i];

        if( particle.allocated === true ){

            if( particle.life === 0 )
                particles.free( particle );

            else if(demo.settings.cull === true && demo.isIn    Bounds(particle) === false)
                particles.free( particle );

            else
                demo.integrate( particle );

            particle.life--;
        }
    }

    if( demo.settings.render === true )
        demo.draw( demo.particles.elements );
};

// in this step we create new particles instead of recycling them
demo.notRecyclingStep = function( particles ) {

    var i;

    for (i = 0; i < demo.settings.rate; i++) {

        var min = -10,
            max = 10,
            velx = min + Math.random() * (max - min),
            vely = min + Math.random() * (max - min),
            x = demo.settings.width * 0.5,
            y = demo.settings.height * 0.5,
            w = demo.settings.size,
            h = demo.settings.size,
            life = demo.settings.life;

        // continuously pushing new objects in an array cause high memory churn and should be avoided
        particles.push( new demo.Particle( x, y, w, h, life ).setVel( velx, vely ) );
    }

    for (i = 0; i < particles.length; i++) {

        var particle = particles[i];

        if( particle.life === 0 ){
            // splicing like pushing should be avoided
            particles.splice(i, 1);
            i--;
        }

        else if(demo.settings.cull === true && demo.isInBounds(particle) === false){
            // splicing like pushing should be avoided
            particles.splice(i, 1);
            i--;
        }

        else
            demo.integrate( particle );

        particle.life--;
    }

    if( demo.settings.render === true )
        demo.draw( demo.particles );
};
