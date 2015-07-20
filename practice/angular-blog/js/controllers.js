'use strict';

var blogControllers = angular.module('blogControllers', [])

blogControllers.controller('BlogCtrl', ['$scope', 'BlogList', 'checkCreds', '$location',
    function BlogCtrl($scope, BlogList, checkCreds, $location) {
        if(!checkCreds()){
            $location.path('/login');
        }

        BlogList.get({},
            function success(response) {
                console.log("Success:" + JSON.stringify(response));
                $scope.blogList = response;
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
    }])

blogControllers.controller('BlogViewCtrl',
    ['$scope', '$routeParams', 'BlogPost', 'checkCreds',
        function BlogViewCtrl($scope, $routeParams, BlogPost, checkCreds) {
            if(!checkCreds()){
                $location.path('/login');
            }
            var blogId = $routeParams.id;

            BlogPost.get({id: blogId},
                function success(response) {
                    console.log("Success:" + JSON.stringify(response));
                    $scope.blogEntry = response;
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                })
        }]);

blogControllers.controller('NewBlogCtrl',
    ['$scope', 'checkCreds', '$location', '$http', 'getToken',
        function NewBlogCtrl($scope, checkCreds, $location, $http, getToken) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();

            Blog.save({},
                function success(response) {
                    console.log("Success:" + JSON.stringify(response));
                    $scope.status = response;
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        }]);


blogControllers.controller('LoginCtrl',
    ['$scope', '$location', 'Login', 'setCreds',
        function LoginCtrl($scope, $location, Login, setCreds) {
            $scope.submit = function(){
                $scope.sub = true;
                var postData = {
                    "username" : $scope.username,
                    "password" : $scope.password
                };

                Login.login({}, postData,
                    function success(response) {
                        console.log("Success:" + JSON.stringify(response));
                        if(response.authenticated){
                            setCreds($scope.username, $scope.password)
                            $location.path('/');
                        }else{
                            $scope.error = "Login Failed"
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                    }
                );
            };
    }]);

blogControllers.controller('LogoutCtrl',
    ['$location', 'deleteCreds',
        function LogoutCtrl($location, deleteCreds) {

            deleteCreds();
            $location.path('/login');

        }]);