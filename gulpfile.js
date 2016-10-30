var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("first_task", function(){
    return gulp.src("js/app.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});
