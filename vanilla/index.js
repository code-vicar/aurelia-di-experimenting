require('./configure')
var di = require('aurelia-dependency-injection');
var Factory = di.Factory;

var thingOne = require('./thingOne');

var thingOneFactory = di.Container.instance.get(Factory.of(thingOne));

var thing = new thingOneFactory('hello');

console.log(thing);
