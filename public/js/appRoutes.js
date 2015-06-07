//appRoutes.js


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider


		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/person',{
			templateUrl: 'views/nerd.html',
			controller: 'PersonController'
		})

	$locationProvider.html5Mode(true);

}]);