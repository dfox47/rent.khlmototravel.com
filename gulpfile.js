'use strict';
// powered by dfox@foxarbox.com

// npm install --save-dev gulp gulp-concat gulp-csso vinyl-ftp gulp-util gulp-rename gulp-sass gulp-uglify

var fs              = require('fs');
var concat          = require('gulp-concat');
var config          = JSON.parse(fs.readFileSync('../config.json'))
var cssMinify       = require('gulp-csso');
var ftp             = require('vinyl-ftp');
var gulp            = require('gulp');
var gutil           = require('gulp-util');
var rename          = require('gulp-rename');
// var sass            = require('gulp-sass');
var sass            = require('gulp-sass')(require('sass'));
var uglify          = require('gulp-uglify');



// FTP config
var host            = config.host;
var password        = config.password;
var port            = config.port;
var user            = config.user;

var remoteFolder        = '/rent.khlmototravel.com/';
var remoteFolderCss     = remoteFolder + 'assets/css/';
var remoteFolderJs      = remoteFolder + 'assets/js/';

var localFolder         = '';
var localFolderCss      = localFolder + 'assets/css/';
var localFolderJs       = localFolder + 'assets/js/';



function getFtpConnection() {
	return ftp.create({
		host:           host,
		log:            gutil.log,
		password:       password,
		parallel:       3,
		port:           port,
		user:           user
	});
}

var conn = getFtpConnection();



gulp.task('css', function () {
	return gulp.src(localFolderCss + 'styles.scss')
		.pipe(sass())
		.pipe(cssMinify())
		.pipe(rename({
			// basename: 'style'
			suffix: ".min"
		}))
		.pipe(conn.dest(remoteFolder));
});

gulp.task('copy_css', function () {
	return gulp.src(localFolderCss + '**/*')
		.pipe(conn.dest(remoteFolderCss));
});



gulp.task('copy_html', function () {
	return gulp.src(localFolder + '**/*.php')
		.pipe(conn.dest(remoteFolder));
});

gulp.task('copy_js', function () {
	return gulp.src(localFolderJs + '**/*.js')
		.pipe(conn.dest(remoteFolderJs));
});

gulp.task('js', function () {
	return gulp.src([
		localFolderJs + 'jquery-3.6.0.min.js',
		localFolderJs + 'jquery-ui.min.js',
		localFolderJs + 'owl.carousel.js',
		localFolderJs + '**/*.js'
	])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(conn.dest(remoteFolder));
});

gulp.task('watch', function() {
	gulp.watch(localFolder + '**/*.php',        gulp.series('copy_html'));
	gulp.watch(localFolderCss + '**/*',         gulp.series('css', 'copy_css'));
	gulp.watch(localFolderJs + '**/*.js',       gulp.series('js', 'copy_js'));
});

gulp.task('default', gulp.series(
	'watch'
));


