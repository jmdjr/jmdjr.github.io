var jmdjrPortfolioApp = angular.module('jmdjrPortfolioApp',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

jmdjrPortfolioApp.config(function ($routeProvider){
        $routeProvider.when('/', 
			{
				controller: 'AppController',
				templateUrl: 'Pages/Home/index.html',
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

jmdjrPortfolioApp.controller('AppController', function($scope, $location) {
	$scope.alerts = [];
	$scope.awards = 0;
	
	$scope.newAlert = function(awardName) {
		var index = $scope.alerts.push({type: 'success', message: awardName});
	}
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	}
	
	$scope.InitHome = function(){
		
	}
	
	$scope.InitSkills = function(){
	
	}
	
	$scope.InitHistory = function(){
	
	}
	
	$scope.InitProjects = function(){
		
	}
	
	$scope.InitAbout = function(){
		
	}
	
});
//awards are given when users visit various places on the site.
// these awards are stored as bit flags in a number which will be saved somewhere
// on the system or in a database.

var awards = {
	key: {name: '', message: '', Id: 0},
	
	
}