(function() {
	'use strict';
	angular.module('app')
	.controller('AddNewPostController', AddNewPostController);

	AddNewPostController.$inject = ['HomeFactory', '$state']; {

		function addNewPostController() {
			var vm = this;
			vm.post_object= {};

			vm.addPost = function () {
				UserFactory.login(vm.post).then(function() {
					vm.post = {};
					$state.go('home');
				});
			};
		}
	}
})();



