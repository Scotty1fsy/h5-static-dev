var fileinclude = require('gulp-file-include'),
  markdown = require('markdown'),
  gulp = require('gulp'),
  clean = require('gulp-clean'), // 清理文件
  // copy2 = require('gulp-copy2'), // 复制文件
  gulpSequence = require('gulp-sequence'), // 串行执行任务
  // concat = require('gulp-concat'), // 文件合并
  sass = require('gulp-sass'), // 获取 gulp-sass 模块
  sourcemaps = require('gulp-sourcemaps'), // map调试
  autoprefixer = require('gulp-autoprefixer'), // css前缀自动补全
  browserSync = require('browser-sync').create(),
  browserSyncReload = browserSync.reload;

/* ---------------------------------------------------- dev task start ----------------------------------------------- */
gulp.task('fileinclude-dev', function () {
  return gulp.src(['./src/html/**/*.html'])
    .pipe(fileinclude({
      filters: {
        markdown: markdown.parse
      }
    }))
    .pipe(gulp.dest('./dist/dev/html'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyCss-dev', function () {
  return gulp.src(['./src/css/**/*.css', './src/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/dev/css'));
});

gulp.task('copyJs-dev', function () {
  return gulp.src(['./src/js/**/*.js'])
    .pipe(gulp.dest('./dist/dev/js'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyImage-dev', function () {
  return gulp.src(['./src/image/**/*'])
    .pipe(gulp.dest('./dist/dev/image'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyFont-dev', function () {
  return gulp.src(['./src/fonts/**/*'])
    .pipe(gulp.dest('./dist/dev/fonts'));
});

gulp.task('copyFavicon-dev', function () {
  return gulp.src(['./favicon.ico'])
    .pipe(gulp.dest('./dist/dev'));
});

// 清理目标目录
gulp.task('clean-dev', function () {
  return gulp.src('./dist/dev')
    .pipe(clean({
      force: true
    }));
});

// 监听文件变化-开发环境
gulp.task('watch', function () {
  // 监控html文件
  gulp.watch('./src/html/**/*', ['fileinclude-dev']);

  // 监控css文件
  gulp.watch('./src/css/**/*', ['copyCss-dev']);

  // 监控js文件
  gulp.watch('./src/js/**/*', ['copyJs-dev']);

  // 监控image文件
  gulp.watch('./src/image/**/*', ['copyImage-dev']);
});

// Static server
gulp.task('browser-sync', function () {
  var files = [
    '**/*.html',
    '**/*.css',
    '**/*.js'
  ];
  browserSync.init(files, {
    watchTask: true,
    server: {
      baseDir: './dist/dev',
      index: 'html/index.html'
    }
  });
});

// 定义开发任务
gulp.task('dev', gulpSequence('clean-dev', ['fileinclude-dev', 'copyCss-dev', 'copyJs-dev', 'copyImage-dev', 'copyFont-dev', 'copyFavicon-dev'], 'browser-sync', 'watch'));
/* -------------------------------------------------- dev task end ---------------------------------------------------------------------- */

/* -------------------------------------------------- build task start ------------------------------------------------------------------ */
gulp.task('fileinclude-build', function () {
  return gulp.src(['./src/html/**/*.html'])
    .pipe(fileinclude({
      filters: {
        markdown: markdown.parse
      }
    }))
    .pipe(gulp.dest('./dist/build/html'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyCss-build', function () {
  return gulp.src(['./src/css/**/*.css', './src/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/build/css'));
});

gulp.task('copyJs-build', function () {
  return gulp.src(['./src/js/**/*.js'])
    .pipe(gulp.dest('./dist/build/js'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyImage-build', function () {
  return gulp.src(['./src/image/**/*'])
    .pipe(gulp.dest('./dist/build/image'))
    .pipe(browserSyncReload({
      stream: true
    }));
});

gulp.task('copyFont-build', function () {
  return gulp.src(['./src/fonts/**/*'])
    .pipe(gulp.dest('./dist/build/fonts'));
});

gulp.task('copyFavicon-build', function () {
  return gulp.src(['./favicon.ico'])
    .pipe(gulp.dest('./dist/build'));
});

// 清理目标目录
gulp.task('clean-build', function () {
  return gulp.src('./dist/build')
    .pipe(clean({
      force: true
    }));
});

// 定义发布任务
gulp.task('build', gulpSequence('clean-build', ['fileinclude-build', 'copyCss-build', 'copyJs-build', 'copyImage-build', 'copyFont-build', 'copyFavicon-build']));
/* -------------------------------------------------- build task end ------------------------------------------------------------------ */
