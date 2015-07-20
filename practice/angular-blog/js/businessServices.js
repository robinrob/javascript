var blogBusinessServices = angular.module('blogBusinessServices', ['ngCookies'])

blogBusinessServices.factory('setCreds', ['$cookies', function($cookies) {
    return function(username, password) {
        var token = username.concat(":", password)
        $cookies.blogCreds = token
        $cookies.blogUsername = username
    }
}])

blogBusinessServices.factory('checkCreds', ['$cookies', function($cookies) {
    return function() {
        var returnVal = false;
        var blogCreds = $cookies.blogCreds;
        if (blogCreds !== undefined && blogCreds !== "") {
            returnVal = true;
        }

        return returnVal;
    };
}]);

blogBusinessServices.factory('deleteCreds', ['$cookies', function($cookies) {
    return function() {
        $cookies.blogCreds = "";
        $cookies.blogUsername = "";
    };
}]);

blogBusinessServices.factory('getToken', ['$cookies', function($cookies) {
    return function() {
        var returnVal = "";
        var blogCreds = $cookies.blogCreds;
        if (blogCreds !== undefined && blogCreds !== "") {
            returnVal = btoa(blogCreds);
        }
        return returnVal;
    };
}]);

blogBusinessServices.factory('getUsername', ['$cookies', function($cookies) {
    return function() {
        var returnVal = "";
        var blogUsername = $cookies.blogUsername;
        if (blogUsername !== undefined && blogUsername !== "") {
            returnVal = blogUsername;
        }
        return returnVal;
    };
}]);