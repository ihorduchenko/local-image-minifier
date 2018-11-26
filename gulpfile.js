const gulp = require('gulp'),
image = require('gulp-image');

const src = './src/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
	dist = './build/';

gulp.task('image', function () {
	gulp.src(src)
	.pipe(image({
		pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: false,
		mozjpeg: true,
		guetzli: false,
		gifsicle: true,
		svgo: true,
		concurrent: 10,
      quiet: true // defaults to false
    }))
	.pipe(gulp.dest(dist))
});