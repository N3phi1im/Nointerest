(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.addPost = addPost;
		return o;


		//add a new post 
		function addPost (newPost) {
			var q = $q.defer();
			$http.post('/api/post', newPost).success(function(res){
				q.resolve();
			});
			return q.promise;
		}
	}

})();



