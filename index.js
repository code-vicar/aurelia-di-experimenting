require('reflect-metadata');
var di = require('aurelia-dependency-injection');

var container = new di.Container();
container.makeGlobal();

require('./settings');
require('./thingOne');

var thingOne = container.get('thingOne');

console.log(thingOne);
