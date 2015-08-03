(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('login',{
			url: '/',
			templateUrl: 'views/Login.html'
		})
		.state('home' ,{
			url: '/home',
			templateUrl: 'views/Home.html'
		});

		$urlRouterProvider.otherwise('/');
	}
})();
