#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


var observer = {
    addSubscriber: function (callback) {
        if (typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    removeSubscriber: function (callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publish: function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](what);
            }
        }
    },
    make: function (o) { // turns an object into a publisher
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                o[i] = this[i];
                o.subscribers = [];
            }
        }
    }
};


var blogger = {
    writeBlogPost: function() {
        var content = 'Today is ' + new Date();
        this.publish(content);
    }
};


var la_times = {
    newIssue: function() {
        var paper = 'Martians have landed on Earth!';
        this.publish(paper);
    }
};


observer.make(blogger);
observer.make(la_times);



var jack = {
    read: function(what) {
        cyan("I just read that " + what)
    }
};
var jill = {
    gossip: function(what) {
        magenta("You didn't hear it from me, but " + what)
    }
};


blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.gossip);
blogger.writeBlogPost();
log()

blogger.removeSubscriber(jill.gossip);
blogger.writeBlogPost();
log()

la_times.addSubscriber(jill.gossip);
la_times.newIssue();