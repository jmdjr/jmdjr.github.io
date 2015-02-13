var jmdjrPortfolioApp = angular.module('jmdjrPortfolioApp',['ngRoute', 'ngAnimate']);

jmdjrPortfolioApp.config(function ($routeProvider){
    $routeProvider
        .when('/', 
			{
				controller: 'AppController',
				templateUrl: 'Pages/Navigation.html'
			})
		.when('/AboutMe',
			{
				controller: 'AppController',
				templateUrl: 'Pages/AboutMe/index.html'
			})
		.otherwise({redirectTo: '/'});
});

jmdjrPortfolioApp.controller('AppController', function($scope) {
});

//jmdjrPortfolioApp.controller('AboutMeController', function($scope) {
//    
//});
//
//jmdjrPortfolioApp.controller('ProjectsController', function($scope) {
//    
//});
//
//jmdjrPortfolioApp.controller('WorkHistoryController', function($scope) {
//    
//});
//
//jmdjrPortfolioApp.controller('SkillsController', function($scope) {
//    
//});