#!/usr/bin/env node
var mkdirp = require('mkdirp');
var fs = require('fs');
var getDirName = require('path').dirname;
var path = require('path');

function writeFile(_path, contents, encoding, cb) {
  mkdirp(getDirName(_path), function (err) {
    if (err) return cb(err);

    fs.writeFile(_path, contents, encoding, cb);
  });
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

fs.readFile(path.resolve(__dirname, 'template.js'), function(err, data) {
  var args = process.argv.slice(2);

  var lowerCaseArgs = args[0].toLowerCase();
  var upperCaseArgs = args[0].toUpperCase();
  var upperCasePlural = args[0].toUpperCase() + 'S';
  var lowerCasePlural = args[0].toLowerCase() + 's';
  var capCase = args[0].capitalize();
  var capCasePlural = args[0].capitalize() + 's';

  data = data.toString();
  data = data.replace(/<<A>>/g, args);
  data = data.replace(/<<B>>/g, lowerCaseArgs);
  data = data.replace(/<<C>>/g, lowerCasePlural);
  data = data.replace(/<<D>>/g, upperCaseArgs);
  data = data.replace(/<<E>>/g, upperCasePlural);
  data = data.replace(/<<F>>/g, capCase);
  data = data.replace(/<<G>>/g, capCasePlural);

  writeFile(process.cwd() + '/frontend/actions/' + lowerCaseArgs + '.actions.js', data, 'utf8');

});
