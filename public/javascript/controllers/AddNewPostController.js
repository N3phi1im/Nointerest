(function() {
	'use strict';
	angular.module('app')
	.controller('AddNewPostController', AddNewPostController);

	AddNewPostController.$inject = ['HomeFactory', 'UserFactory', '$state']; 

	function addNewPostController(HomeFactory, UserFactory, $state) {
		var vm = this;
		vm.post_object= {};
		vm.logOut = UserFactory.logout();

		vm.addPost = function () {
			UserFactory.login(vm.post).then(function() {
				vm.post = {};
				$state.go('home');
			});
		};

	}})();



