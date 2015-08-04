(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['UserFactory', '$http', '$q'];

	function HomeFactory(UserFactory, $http, $q) {
		var o = {};
		o.addPost = addPost;
		return o;

		//add a new post

		function addPost(newPost) {
			var q = $q.defer();
			console.log(UserFactory.status);
			$http.post('/v1/api/Post', newPost).success(function(res){
				q.resolve();
			});
			return q.promise;
		}
	}

})();
