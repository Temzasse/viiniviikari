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
		vm.allposts = [
			{
				title : 'viini 1',
				imgUrl : 'https://c1.staticflickr.com/1/458/18379325189_72aa346583_c.jpg',
				details : 
					[
						{
							label : 'Rypäle',
							content : 'Shiraz Cabernet'
						},
						{
							label : 'Vuosikerta',
							content : '1997'
						},
						{
							label : 'Maa',
							content : 'Australia'
						}

					],
				description : 'aivan huikee viini',
				rating : 9.7
			},
			{
				title : 'viini 2',
				imgUrl : 'https://c1.staticflickr.com/1/458/18379325189_72aa346583_c.jpg',
				details : 
					[
						{
							label : 'Rypäle',
							content : 'Shiraz Cabernet'
						}
					],				
				description : 'ei sovi kalan kanssa',
				rating : 6.7			
			},
			{
				title : 'viini 3',
				imgUrl : 'https://c1.staticflickr.com/1/458/18379325189_72aa346583_c.jpg',
				details : 
					[
						{
							label : 'Rypäle',
							content : 'Shiraz Cabernet'
						}
					],				
				description : 'ainoa laatuaan',
				rating : 9.9			
			}
		];

		vm.getPosts = getPosts;
		activate();
		/////////////////////



		function activate(){
			console.log('hae kaikki postit');
		}
		function getPosts(){

		}
	});



})();