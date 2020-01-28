# setup-ts-npm-web

A project template for the creation of web apps using Typescript and npm packages

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

#### Software

* [Node.js](https://nodejs.org/en/download/) - A JavaScript run-time environment

#### Global npm packages

* [gulp.js](https://gulpjs.com/) - The streaming build system for Node.js

```node
npm install --global gulp-cli
```

#### VS Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) - TSLint for Visual Studio Code
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code

### Installing

```node
npm install
```

## Linting

### TypeScript

```node
gulp lint:ts
```

### JavaScript

```node
gulp lint:es
```

### TypeScript and JavaScript

```node
gulp lint
```

## Building

### One-time

```node
gulp build
```

### Watch for changes

```node
gulp watch
```

## Additional Commands

### Open in browser

```node
gulp serve
```

### Watch for changes and open in browser

```node
gulp default
```

## Built With

* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
* [TSLint](https://palantir.github.io/tslint/) - An extensible linter for the TypeScript language
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [gulp.js](https://gulpjs.com/) - The streaming build system for Node.js
* [browserify](http://browserify.org/) - Lets you `require('modules')` in the browser by bundling up all of your dependencies
* [watchify](https://github.com/browserify/watchify) - Watch mode for browserify builds

## Authors

* **Robin Hartmann** - [robin-hartmann](https://github.com/robin-hartmann)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
