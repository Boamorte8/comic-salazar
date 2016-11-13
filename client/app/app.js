angular.module("comicsApp", ['ui.router']);

angular.module("comicsApp")
.config(function($urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
});
