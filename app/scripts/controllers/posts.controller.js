(function() { 'use strict';
/**
 * @ngdoc function
 * @name viiniviikari.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller for all posts
 */

angular
	.module('viiniviikari')
	.controller('PostsCtrl', function(Post){
		/* jshint validthis: true */
		var vm = this;

		vm.posts = [];

		activate();
		/////////////////////



		function activate(){
			console.log('hae kaikki postit');
			vm.posts = Post.all;
			console.log(vm.posts);
		}

	});



})();