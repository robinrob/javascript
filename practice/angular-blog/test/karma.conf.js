module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            "js/libs/angular.min.js",
            "js/libs/angular-mocks.js",
            "js/libs/angular-route.min.js",
            "js/libs/angular-resource.min.js",
            "js/libs/angular-cookies.min.js",
            "js/*.js",
            "partials/*.html",
            "test/**/*Spec.js"
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-ng-html2js-preprocessor"
        ],
        preprocessors: {
            'public_html/partials/*.html': ['ng-html2js']
        }
    });
};
