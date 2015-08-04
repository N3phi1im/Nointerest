(function() {
	'use strict';
	angular.module('app')
	.controller('IndexController', IndexController);

	IndexController.$inject = [];

	function IndexController() {

		// Declarations
  
		var vm = this;
		vm.title = 'Welcome to our App!';
	}
})();
