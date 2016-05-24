var gulp = require('gulp');
var winInstaller = require('electron-windows-installer');
 
 
gulp.task('create-windows-installer', function(done) {
  winInstaller({
    appDirectory: './',
    outputDirectory: './inst32',
    arch: 'ia32'
  }).then(done).catch(done);
 
});