require('core-js/es6/reflect');
require('reflect-metadata');
var di = require('aurelia-dependency-injection');
var Factory = di.Factory;

var container = new di.Container();
container.makeGlobal();

var thingOne = require('./thingOne');

var thingOneFactory = container.get(Factory.of(thingOne));

var thing = new thingOneFactory('hello');

console.log(thing);
