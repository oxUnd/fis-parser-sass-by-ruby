/**
 * github.com/xiangshouding
 */

'use strict';

var sass = require('./sass');

module.exports = function (content, file, options) {
  return sass.process(file.realpath, options);
};