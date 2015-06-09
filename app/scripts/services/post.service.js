(function(){ 'use strict';


angular
	.module('viiniviikari')
	.factory('Post', function ($firebaseObject, $firebaseArray, FIREBASE_URL) {
	 	var ref = new Firebase(FIREBASE_URL+'posts');
  		var posts = $firebaseArray(ref);
  		var Post = {
  			all : posts,
  			create : function(post){
  				return posts.$add(post);
  			},
  			get : function(postId){
  				return $firebaseObject(ref.child(postId));
  			},
  			delete : function(post){
  				return posts.$remove(post);
  			}
  		};
  		return Post;
	});



})();


