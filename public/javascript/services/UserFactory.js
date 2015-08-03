(function() {
	'use strict';
	angular.module('app')
	.factory('UserFactory', UserFactory);

	UserFactory.$inject = ['$http', '$q'];

	function UserFactory($http, $q) {

		// UserFactory Operations shortcuts

		var o = {};
		o.status = {};
		if(getToken()) {
			o.status.isLoggedIn = true;
			o.status.userName = getUserName();
		}
		o.setToken = setToken;
		o.getToken = getToken;
		o.removeToken = removeToken;
		o.register = register;
		o.login = login;
		o.logout = logout;
		return o;

		// Functions list

		// Register User and Log them in

		function register(user) {
			var q = $q.defer();
			$http.post('/v1/api/Users/Register', user).success(function(res) {
				setToken(res.token);
				o.status.isLoggedIn = true;
				q.resolve();
			});
			return q.promise;
		}

		// Login User

		function login(user) {
			var u = { userName: user.userName.toLowerCase(), password: user.password};
			var q = $q.defer();
			$http.post('/v1/api/User/Login', u).success(function(res) {
				setToken(res.token);
				o.status.isLoggedIn = true;
				q.resolve();
			});
			return q.promise;
		}

		// Logout User

		function logout() {
			o.status.isLoggedIn = false;
			removeToken();
		}

		// Put Token in client storage

		function setToken(token) {
			localStorage.setItem('token', token);
			o.status.userName = getUserName();
		}

	}
})();