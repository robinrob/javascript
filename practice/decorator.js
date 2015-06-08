#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')


var tree = {};
tree.decorate = function () {
    log('Make sure the tree won\'t fall');
};

tree.getDecorator = function (deco) {
    tree[deco].prototype = this;
    return new tree[deco];
};

tree.RedBalls = function () {
    this.decorate = function () {
        this.RedBalls.prototype.decorate();
        log('Put on some red balls');
    };
};

tree.BlueBalls = function () {
    this.decorate = function () {
        this.BlueBalls.prototype.decorate();
        log('Add blue balls');
    };
};

tree.Angel = function () {
    this.decorate = function () {
        this.Angel.prototype.decorate();
        log('An angel on the top');
    };
};


/* What happens is that the objects are joined together in a 'chain'. When tree.decorate() is called - the decorate()
 method on the last decorator to be added is really being called - in this case: RedBalls.decorate(). This method in
 turn calls Angel.decorate() which calls BlueBalls.decorate() which calls tree.decorate(). */
tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('Angel');
tree = tree.getDecorator('RedBalls');

tree.decorate();