'use strict';

angular.module('viiniviikari')

.config(function ($routeProvider) {
	$routeProvider
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/posts', {
	    templateUrl: 'views/posts.html',
	    controller: 'PostsCtrl as vm'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
	});