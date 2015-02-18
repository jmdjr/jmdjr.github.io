var jmdjrPortfolioApp = angular.module('jmdjrPortfolioApp',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

jmdjrPortfolioApp.config(function ($routeProvider){
        $routeProvider.when('/', 
			{
				controller: 'AppController',
				templateUrl: 'Pages/Home.html'
			})
		.when('/AboutMe',
			{
				controller: 'AppController',
				templateUrl: 'Pages/AboutMe/index.html'
			})
		.when('/Projects',
			{
				controller: 'AppController',
				templateUrl: 'Pages/Projects/index.html'
			})
		.when('/History',
			{
				controller: 'AppController',
				templateUrl: 'Pages/History/index.html'
			})
		.when('/Skills',
			{
				controller: 'AppController',
				templateUrl: 'Pages/Skills/index.html'
			})
		.otherwise({redirectTo: '/'});
});

jmdjrPortfolioApp.controller('AppController', function($scope) {
});
