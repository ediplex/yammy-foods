// browser-sync config

module.exports = {
  port: 8000,
  files: [
    'index.html',
    "./css/**/*.css",
    "./js/**/*.js",
    "./img/**/*"
  ],
  server: {
    baseDir: "./"
  },
  reloadDelay: 100
};
