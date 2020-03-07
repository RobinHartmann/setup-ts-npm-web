# 📄 template-web-ts-npm

Project Template for creating Web Apps with Typescript and npm Packages

## 🛠️ Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

#### Software

* [Node.js](https://nodejs.org/en/download/) - A JavaScript run-time environment

#### Global npm packages

* [gulp.js](https://gulpjs.com/) - The streaming build system for Node.js

```bash
npm install --global gulp-cli
```

#### VS Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) - TSLint for Visual Studio Code
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code

### 🚀 Built-in Tasks

This project uses npm scripts for running tasks:

```bash
# install all dependencies
npm install

## lint the project
# all TypeScript code
gulp lint:ts
# all JavaScript code
gulp lint:es
# both all TypeScript and JavaScript code
gulp lint

## build the project
# only once
gulp build
# on each change
gulp watch

## open output in browser
# only once
gulp serve
# on each change
gulp default
```

## 🔧 Built With

* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
* [TSLint](https://palantir.github.io/tslint/) - An extensible linter for the TypeScript language
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [gulp.js](https://gulpjs.com/) - The streaming build system for Node.js
* [browserify](http://browserify.org/) - Lets you `require('modules')` in the browser by bundling up all of your dependencies
* [watchify](https://github.com/browserify/watchify) - Watch mode for browserify builds

## 👨‍💻 Authors

* **Robin Hartmann** - [robin-hartmann](https://github.com/robin-hartmann)

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
