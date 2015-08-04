(function() {
	'use strict';
	angular.module('app')
	.controller('IndexController', IndexController);

	IndexController.$inject = ['HomeFactory', 'UserFactory'];

	function IndexController(HomeFactory, UserFactory) {

		// Declarations

		var vm = this;
		vm.status = UserFactory.status;



	}
})();
