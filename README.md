### Doug

The Doug project is a pattern for managing vector sprites. The goal here is to bring them to life. Once this part is done, we'll focus on integrating @Animate.

![Doug](https://s3.amazonaws.com/sonipa/doug.jpg "Doug")

Each vector sprite is made of three things: 

* One Typescript file
* One CSS stylesheet
* An HTML5 template containing the vector path information (SVG)

This works great with webpack as there are no actual SVG files or images. The result is a very small tree of living vector components which are easy to edit and organize. Welcome to Doug's world! 

#### Libraries

* [Angular 2](https://github.com/angular/quickstart) as the structural framework
* [Webpack Module Bundler](https://github.com/webpack/webpack) as the static asset generator

> When Angular2 animation is ready, we'll be adding that into the mix.

#### Install

* `git clone git@github.com:sonipa/doug.git`
* `cd doug`
* `npm install`

#### Edit

* `npm start` webpack-dev-server on port 8080

#### Deploy

* `npm run build` webpack creates build in dist
