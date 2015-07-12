'use strict';

var blogControllers = angular.module('blogControllers', [])

blogControllers.controller('BlogCtrl', ['$scope', function BlogCtrl($scope) {
    function BlogCtrl($scope) {
        $scope.blogList = [
            {
                "_id": 1,
                "date": 1400623623107,
                "introText": "This is a blog post about AngularJS. We will cover how to build",
                "blogText": "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post."
    },
    {
        "_id": 2,
        "date": 1400267723107,
        "introText": "In this blog post we will learn how to build applications based on REST",
        "blogText": "In this blog post we will learn how to build applications based on REST web services that contain most of the business logic needed for the application."
    }
    ]
}}])
