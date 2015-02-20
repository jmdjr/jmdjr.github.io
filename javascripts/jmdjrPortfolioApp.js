var jmdjrPortfolioApp = angular.module('jmdjrPortfolioApp',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

jmdjrPortfolioApp.config(function ($routeProvider){
        $routeProvider.when('/', 
			{
				controller: 'AppController',
				templateUrl: 'Pages/Home.html',
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

jmdjrPortfolioApp.controller('AppController', function($scope, $timeout) {
	$scope.alerts = [];
	$scope.awards = 0;
	
	$scope.newAlert = function(awardName) {
		var index = $scope.alerts.push({type: 'success', message: awardName, class:'fadeIn'});
		setTimeout(function(){
			$scope.alerts[index - 1].class = 'fadeOut';
			$scope.closeAlert(0, 1000);
		}, 1000);
	}
	
	$scope.closeAlert = function(index, timeout) {
		
		$timeout(function() {		
			$scope.alerts.splice(index, 1);
		}, timeout);
	}
	$scope.newAlert('test 1');
	
	setTimeout(function(){
		$scope.newAlert('test 2');
		
		setTimeout(function(){
			$scope.newAlert('test 3');
		}, 1000);
		
	}, 1000);
	
	
});
//awards are given when users visit various places on the site.
// these awards are stored as bit flags in a number which will be saved somewhere
// on the system or in a database.

var awards = {
	key: {name: '', message: '', Id: 0},
	
	
}