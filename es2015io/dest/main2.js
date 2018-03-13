'use strict';

var _calctest = require('./calctest.js');

var ct = _interopRequireWildcard(_calctest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('3+5=', ct.add(3, 5));
console.log('4*8=', ct.mul(4, 8));