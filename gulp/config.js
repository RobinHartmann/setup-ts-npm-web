'use strict';

const config = {
  filenames: {
    bundle: 'bundle',
  },
  paths: {
    compile: 'target/compile',
    dist: 'target/dist',
    entries: ['target/compile/main.js'],
    source: 'src',
  },
  serve: {
    port: 8080,
    startPage: 'main.html',
  },
};

config.globs = {
  compileables: `${config.paths.source}/**/*.{ts,d.ts,js}`,
  lintables_ts: `${config.paths.source}/**/*.{ts,d.ts}`,
};

module.exports = config;
