var jmdjrPortfolioApp = angular.module('jmdjrPortfolioApp',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

jmdjrPortfolioApp.config(function ($routeProvider){
    $routeProvider
        .when('/', 
			{
				controller: 'AppController',
				templateUrl: 'index.html'
			});
});

jmdjrPortfolioApp.controller('AppController', function($scope) {
});

jmdjrPortfolioApp.controller('AboutMeController', function($scope) {
    
});

jmdjrPortfolioApp.controller('ProjectsController', function($scope) {
    
});

jmdjrPortfolioApp.controller('WorkHistoryController', function($scope) {
    
});

jmdjrPortfolioApp.controller('SkillsController', function($scope) {
    
});