var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;
var spritesmith = require('gulp.spritesmith');


gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src('./app/markups/_pages/*.jade')
		.pipe(plumber())
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty : '\t',
		}))
		.pipe(gulp.dest('./app'))
});


gulp.task('wiredep', function () {
	  gulp.src('app/markups/_common/*.jade')
	    .pipe(wiredep({
	    	ignorePath: /^(\.\.\/)*\.\.\//  }
	    	))
	    .pipe(gulp.dest('app/markups/_common/'))
	});


gulp.task('compass', function() {
	gulp.src('./app/scss/main.scss')
		.pipe(plumber())
		.pipe(compass({
			config_file: './config.rb',
			css: 'app/css',
			sass: 'app/scss'
		}))
});

gulp.task('sync', function(){
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('sprite', function () {
	var spriteData =
		gulp.src('app/img/icons-for-sprite/*.png')
			.pipe(spritesmith({
				imgName: 'icon-sprite.png',
				cssName: '_icon-sprite.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				padding: 10
			}));
	// return spriteData.pipe(gulp.dest('./app/img/icon-sprite/'));

	spriteData.img.pipe(gulp.dest('app/img/entire-sprite/'));
	spriteData.css.pipe(gulp.dest('app/scss/_common/'));
});

gulp.task('watch', function(){
	gulp.watch('./app/markups/**/*.jade', ['jade']);
	gulp.watch('./app/scss/**/*.scss', ['compass']);
	gulp.watch('./bower.json', ['wiredep']);
	gulp.watch(['app/*.html', 'app/css/*.css', 'app/js/*.js']).on('change', browserSync.reload);
});


gulp.task('default', ['jade', 'compass', 'sync', 'watch']);