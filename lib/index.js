'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var el = (0, _index2.default)(selector);

  Object.keys(props || {}).forEach(function (p) {
    switch (p) {
      case 'className':
        el.setAttribute('class', props[p]);
        break;
      default:
        el.setAttribute(p, props[p]);
    }
  });

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.filter(function (c) {
    return typeof c === 'string' || isNode(c);
  }).map(function (c) {
    return typeof c === 'string' ? (0, _index4.default)().createTextNode(c) : c;
  }).forEach(function (c) {
    return el.appendChild(c);
  });

  return el;
};

var _index = require('/Users/wrumsby/dev/dom/bower_components/create-element/src/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/wrumsby/dev/dom/bower_components/get-doc/src/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNode(value) {
  /*global Node */
  if (typeof Node === 'undefined') {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.nodeType === 'number';
  }

  return value instanceof Node;
}