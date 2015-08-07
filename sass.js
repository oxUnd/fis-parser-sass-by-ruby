/**
 * github.com/xiangshouding
 */

'use strict';

var spawnSync = require('child_process').spawnSync;

exports.process = function (filepath, options) {
  options = options || {};
  var need = [
    'load-path',
    'require',
    'compass',
    'style',
    'scss'
  ];
  
  var args = [];
  fis.util.map(options, function (k, v) {
    if (need.indexOf(k) == -1) return;
    args.push('--' + k);
    if (k !== '') {
      args.push(v);
    }
  });

  var pArgv = process.argv;
  if (pArgv.indexOf('-c') > -1 || pArgv.indexOf('--clean') > -1) {
    args.push('--no-cache');
  }

  args.push(filepath);

  var result = spawnSync('sass', args);
  if (result.stderr.length > 0) {
    throw new Error(result.stderr.toString());
  }
  return result.stdout.toString();
};