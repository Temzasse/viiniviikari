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
	.controller('PostsCtrl', function(){
		/* jshint validthis: true */
		var vm = this;
		vm.testi = 'moi';

		activate();
		return vm;
		/////////////////////



		function activate(){
			console.log('hae kaikki postit');
		}
	});



})();