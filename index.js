/**
 * github.com/xiangshouding
 */

'use strict';

var sass = require('./sass');

module.exports = function (content, file, options) {
  console.log(options);
  return sass.process(file.realpath, options);
};