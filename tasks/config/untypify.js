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
module.exports = function (grunt) {

  grunt.config.set('ts', {
    // use to override the default options, See: http://gruntjs.com/configuring-tasks#options
    // see `tsc --help` for a list of supported options.
    options: {
      target: "es6",
      module: "system",
      moduleResolution: "node",
      sourceMap: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true, 
      removeComments: false,
      noImplicitAny: false
    },
    // a particular target
    dev: {
      src: ["ng2app/**/*.ts"],
      outDir: ".tmp/public/ng2app"
    }
  });

  grunt.loadNpmTasks("grunt-ts");
};