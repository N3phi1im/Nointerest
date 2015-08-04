(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory', 'UserFactory, $state'];

	function HomeController(HomeFactory, UserFactory, $state) {

		// Declarations
  
		var vm = this;
		vm.logOut = UserFactory.logOut();

	}
})();
