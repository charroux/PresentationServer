'use strict';

var app = angular.module('location', [
	'ngRoute','rentControllers']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/location', {
				templateUrl: 'partials/menu.html'
			}).
			when('/location/creerCar', {
				templateUrl: 'partials/creerCar.html',
				controller: 'creerCarController'
			}).
			when('/location/supprimerCar', {
				templateUrl: 'partials/supprimerCar.html',
				controller: 'supprimerCarController'
			}).
			when('/location/louer', {
				templateUrl: 'partials/louer.html',
				controller: 'louerController'
			}).
			when('/location/ramener', {
				templateUrl: 'partials/ramener.html',
				controller: 'ramenerController'
			}).
			otherwise({
				redirectTo: '/location'
			});
}]);
