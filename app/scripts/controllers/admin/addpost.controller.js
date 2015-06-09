(function(){

angular
	.module('viiniviikari')
	.controller('addPostCtrl', function(Post){
		/* jshint validthis: true */
		var vm = this;
		vm.foodOptions = ['Nauta', 'Porsas', 'Lammas', 'Kana', 'Riista', 'Rasvainen kala', 'Vähärasvainen kala', 'Äyriäiset', 'Pasta', 'Salaatti']
		// 
		vm.post = {
			title : '',
			imgUrl : '',
			details : 
			{
				grapes : {label:'Rypäleet', content: ''},
				year : {label:'Vuosi', content: ''},
				producer : {label:'Tuottaja', content: ''},
				type : {label:'Tyyppi', content: ''},
				country : {label:'Maa', content: ''},
				location : {label:'Alue', content: ''},
				litres : {label:'Litramäärä', content: ''},
			},
			description : '',
			foodOptions : [],
			rating : 0
		};

		vm.submitPost = submitPost;
		vm.validatePostData = validatePostData;
		return vm;
		///////////////////////////

		function submitPost(){
			Post.create(vm.post).then(function(e){
				// tyhjennä post variable
				console.log(e);
				clearPostForm();
			});
			
		}

		function validatePostData(){
			// validaatiot tähän...
			console.log(vm.post);
			vm.submitPost();
			// var valid = true;

			// if(valid)
			// 	vm.submitPost();
			// else
			// 	console.log('invalid data');
		}
		function clearPostForm(){
			vm.post = {
				title : '',
				imgUrl : '',
				details : 
				{
					grapes : {label:'Rypäleet', content: ''},
					year : {label:'Vuosi', content: ''},
					producer : {label:'Tuottaja', content: ''},
					type : {label:'Tyyppi', content: ''},
					country : {label:'Maa', content: ''},
					location : {label:'Alue', content: ''},
					litres : {label:'Litramäärä', content: ''},
				},
				description : '',
				foodOptions : [],
				rating : 0
			};
		}

	});


})();




// info : 
// 	[
// 		{
// 			label : "",
// 			content : ""
// 		}
//		...
// 	]