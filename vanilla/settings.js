var di = require('aurelia-dependency-injection');

var settings = function settings() {
    return {
        'just': 'some',
        'test': 'settings'
    };
};

exports = module.exports = settings;
di.Container.instance.autoRegister(settings);
