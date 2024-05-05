### Doug

> This project is a prototype/work in progress at this point

Doug is a pattern for working with vector sprites in Angular2. The focus right now is on the output (small static files ready for production).

Each vector sprite is made of three parts: 

* One Typescript file
* One CSS stylesheet
* An HTML5 template containing the vector path information (SVG)

This works great with webpack as there are no actual SVG files or images. The result is a very small tree of ~~living~~ (one day) vector components which are easy to edit and organize. Welcome to Doug's world!

> We are at the very beginning of this project. The first step is providing Typescript manipulatable Angular2 vector sprite components that can be minified to a collection of static files.

#### Ingredients

* [Angular 2](https://github.com/angular/quickstart) / structural framework
* [Angular Universal](https://github.com/angular/universal) / base pattern
* [Webpack Module Bundler](https://github.com/webpack/webpack) / static asset generator

#### Installation

* `npm install`

#### Serve

* `npm start` to build your client app and start a web server
* `npm run build` to prepare a distributable bundle

#### Development
* run `npm start` and `npm run watch` in two separate terminals to build your client app, start a web server, and allow file changes to update in realtime

#### Watch files
* `npm run watch` to build your client app and start a web server
