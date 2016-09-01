## DonkeyCode Angular2 tools

DonkeyCode offers a set of tools for developing with Angular 2 : spinner, default image for example.

Have fun <3 !!

# Contributing Guide

Contributing to `donkeycode-angular2-tools` is fairly easy. This document shows you how to
get the project, run all provided tests and generate a production ready build.

## Dependencies

To make sure, that the following instructions work, please install the following dependencies
on you machine:

- Node.js
- npm
- Git

## Installation

To get the source of `donkeycode-angular2-tools` clone the git repository via:

`git clone https://github.com/donkeycode/donkeycode-angular2-tools`

This will clone the complete source to your local machine. Navigate to the project folder
and install all needed dependencies via **npm**:

`npm install`

Finally, install the required typescript definitions:

`npm run install_typings`

Well done! angular2-moment is now installed and ready to be built.

If you add an new component, service or directive, don't forget to add file on `tsconfig.json`.

````
{
  "version": "1.8.10",
  "compilerOptions": {
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "declaration": true,
    "outDir": "dist"
  },
  "files": [
    "typings/index.d.ts",
    "src/index.ts",
    "src/directives/default-image.directive.ts",
    "YOUR/FILE.HERE"
  ]
}
````

##DOCUMENTATION.
We love documentation and we want documentation.
Also, We work with typedoc ===> http://typedoc.org/guides/doccomments/

## Building

`donkeycode-angular2-tools` comes with a few **npm scripts** which help you to automate
the development process.
