module.exports = function(grunt) {

  grunt.initConfig({

    });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['test']);
  
  grunt.registerTask('test', 'run tests', function () {
    var done = this.async();
    require('child_process').exec('npm test', function (err, stdout) {
      grunt.log.write(stdout);
      done(err);
    });
  });

};