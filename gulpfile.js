const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify");

// HTML Tasks
gulp.task("html", () =>
  gulp.src("pug/index.pug").pipe(pug()).pipe(gulp.dest("dist"))
);

// CSS Tasks
gulp.task("css", () =>
  gulp
    .src("sass/**/*.sass")
    //sourcemaps.init()
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    //sourcemaps.write()
    .pipe(gulp.dest("dist"))
);

// JS Tasks
gulp.task("js", () =>
  gulp
    .src("js/index.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(gulp.dest("js/dist"))
);

// Watch All Tasks
gulp.task("default", () => {
  gulp.watch("pug/**/*.pug", gulp.series("html"));
  gulp.watch("sass/**/*.sass", gulp.series("css"));
  gulp.watch("js/*.js", gulp.series("js"));
});
