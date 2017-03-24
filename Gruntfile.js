module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        // Typescript compiler options for grunt-ts
        ts: {
            options: {
                compile: true,
                comments: false,
                target: 'es3',
                module: 'amd',
                sourceMap: true,
                sourceRoot: '',
                maproot: '',
                declaration: false,
                htmlModuleTemplate: ''
            }
        }
    });
}