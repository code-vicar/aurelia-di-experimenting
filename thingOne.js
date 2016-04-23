var di = require('aurelia-dependency-injection');

var thingOne = function thingOne(settings, data) {
    this.settings = settings;
    this.data = data;
}

thingOne.inject = function() {
    return ['settings'];
}

exports = module.exports = thingOne;

di.Container.instance.autoRegister(thingOne, 'thingOne');
