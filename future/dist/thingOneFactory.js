'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var thingOneFactory = (_dec = (0, _aureliaDependencyInjection.inject)(_settings2.default), _dec(_class = function thingOneFactory(settings, data) {
    _classCallCheck(this, thingOneFactory);

    this.settings = settings;
    this.data = data;
}) || _class);
exports.default = thingOneFactory;


_aureliaDependencyInjection.Container.instance.autoRegister(thingOneFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaW5nT25lRmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFHcUIsZSxXQURwQiwyRCxnQkFFRyx5QkFBWSxRQUFaLEVBQXNCLElBQXRCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDSCxDO2tCQUpnQixlOzs7QUFPckIsc0NBQVUsUUFBVixDQUFtQixZQUFuQixDQUFnQyxlQUFoQyIsImZpbGUiOiJ0aGluZ09uZUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIGluamVjdCwgZmFjdG9yeSB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncydcblxuQGluamVjdChzZXR0aW5ncylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRoaW5nT25lRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB9XG59XG5cbkNvbnRhaW5lci5pbnN0YW5jZS5hdXRvUmVnaXN0ZXIodGhpbmdPbmVGYWN0b3J5KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
