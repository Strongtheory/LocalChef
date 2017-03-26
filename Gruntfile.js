module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        // Typescript compiler options for grunt-ts
        ts: {
            default: {
                src: ["**/*.ts", "!node_modules/**/*.ts"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};