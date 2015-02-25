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
	$scope.PixelShipGame = [{html:'<div class="pixelship-wrapper">click to launch Game</div>'}];
	$scope.awards = 0;
	
	$scope.newAlert = function(awardName) {
		var index = $scope.alerts.push({type: 'success', message: awardName});
	}
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	}
	
	$scope.enablePixelShipGame = function() {
		$scope.PixelShipGame = [{html:'<div class="pixelship-wrapper"><embed width="250" height="250" style="border: solid 2px black;" src="http://chat.kongregate.com/gamez/0012/6336/live/PixelShip9000.swf"></div>'}];
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

jmdjrPortfolioApp.directive('encodeHtml', function($compile, $timeout) {
	return {
		template: '<div></div>',
		scope: {
			rawHtml: '=encodeHtml'
		},
		link: function(scope, elem, attributes) {
			scope.$watch('rawHtml', function(value) {
				if(!value) return;
				
				var htmlMarkup = $compile(value)(scope.$parent);
				elem.contents().remove();
				elem.append(htmlMarkup);
			});
		}
	};

});


//awards are given when users visit various places on the site.
// these awards are stored as bit flags in a number which will be saved somewhere
// on the system or in a database.

var awards = {
	key: {name: '', message: '', Id: 0},
	
	
}