var simple = require('simple-cli');
var path = require('path');
var yslowPath = path.resolve(__dirname, '../node_modules/.bin/yslow');

module.exports = function(grunt) {
  grunt.registerMultiTask('yslow', 'A grunt wrapper for yslow', function() {
    simple.spawn(grunt, this, yslowPath, this.async());
  });
};
