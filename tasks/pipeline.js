/**

Copyright 2016, Cloud Compass Computing, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   ../
 */

/**
 * App build version to accomodate new angular 2 app injections
 * set to true to build ng2 app instead
 * TODO: remove this eventually
 */
var newApp = require('../config/local').newApp;

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = !newApp ? [
  'node_modules/angular-material/angular-material.css',
  'node_modules/nvd3/build/nv.d3.css',
  'styles/**/*.css'
] : [
  'node_modules/@angular/material/core/theming/prebuilt/purple-green.css',
  'ng2app/styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = !newApp ? [

  // Load sails.io before everything else
  'node_modules/socket.io-client/socket.io.js',
  'node_modules/sails.io.js/sails.io.js',
  // Dependencies like jQuery, or Angular are brought in here
  'node_modules/angular/angular.js',
  'node_modules/angular-resource/angular-resource.js',
  'node_modules/angular-animate/angular-animate.js',
  'node_modules/angular-cookies/angular-cookies.js',
  'node_modules/angular-aria/angular-aria.js',
  'node_modules/d3/d3.js',
  'node_modules/nvd3/build/nv.d3.js',
  'node_modules/angular-nvd3/dist/angular-nvd3.js',
  'node_modules/angular-sanitize/angular-sanitize.js',
  'node_modules/angular-messages/angular-messages.js',
  'node_modules/angular-material/angular-material.js',
  'node_modules/angular-ui-router/release/angular-ui-router.js',
  'node_modules/ui-router-extras/release/modular/ct-ui-router-extras.core.js',
  'node_modules/ui-router-extras/release/modular/ct-ui-router-extras.transition.js',
  'node_modules/ui-router-extras/release/modular/ct-ui-router-extras.previous.js',
  'node_modules/angular-sails/dist/angular-sails.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'app/**/*.js'
] : [
  'node_modules/socket.io-client/socket.io.js',
  'node_modules/sails.io.js/sails.io.js',
  'node_modules/es6-shim/es6-shim.js',
  'node_modules/es6-promise/dist/es6-promise.js',
  'node_modules/systemjs/dist/system-polyfills.src.js',
  'node_modules/systemjs/dist/system.src.js',
  'node_modules/zone.js/dist/zone.js',
  'node_modules/reflect-metadata/Reflect.js',
  'ng2app/system.config.js'
];

// These files copied into the client-side application
// but are not injected into layout.ejs via grunt.
// Instead, they are loaded as modules by SystemJS which is configured in ng2app/system.config.js
var jsFilesToCopy = !newApp ? [
    //old stuff
] : [
  'node_modules/@angular/core/bundles/core.umd.js',
  'node_modules/@angular/common/bundles/common.umd.js',
  'node_modules/@angular/compiler/bundles/compiler.umd.js',
  'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
  'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  'node_modules/@angular/http/bundles/http.umd.js',
  'node_modules/@angular/router/bundles/router.umd.js',
  'node_modules/@angular/forms/bundles/forms.umd.js',
  'node_modules/@angular/material/bundles/material.umd.js',
  'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js',
  'node_modules/rxjs/**/*.js',
  'ng2app/**/*.!(coffee|less|scss|sass|ts)'
];

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = !newApp ? [
  'app/views/**/*.html'
] : [
  'ng2app/*.html'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function (cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function (jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function (tplPath) {
  return require('path').join('assets/', tplPath);
});

module.exports.jsFilesToCopy = jsFilesToInject.concat(jsFilesToCopy);
module.exports.cssFilesToCopy = cssFilesToInject;
module.exports.templateFilesToCopy = templateFilesToInject;
