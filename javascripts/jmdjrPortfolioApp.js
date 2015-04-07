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
		$scope.languageImages = [ '/images/logos/Languages/javascript.png'
								 , '/images/logos/Languages/css3.png'
								 , '/images/logos/Languages/html5.png'
								 , '/images/logos/Languages/csharp.png'
								 , '/images/logos/Languages/Java.png'
								 , '/images/logos/Languages/Ruby.png'
								 , '/images/logos/Languages/C++.png'
								 , '/images/logos/Languages/lua.png'];
		
		$scope.IDEImages = [ '/images/logos/IDEs/flash.png'
						    , '/images/logos/IDEs/programmer-notepad.png'
						    , '/images/logos/IDEs/brackets.png'
						    , '/images/logos/IDEs/vs2013.png'
						    , '/images/logos/IDEs/eclipse.png'
						   ];
		
		$scope.EngineImages = [ '/images/logos/Game Engines/unity.png'
							   , '/images/logos/Game Engines/phaserio.png'
							   , '/images/logos/Game Engines/flixel.png'
							   , '/images/logos/Game Engines/xna.png'
							  ];
	}
	
	$scope.InitHistory = function(){
		$scope.JobHistory = [
			{
				company: {
					name: "Tulalip Data Services",
					description: "A Software Development department working for the Tulalip Indian Tribes of washington State.",
					logo: "/images/Work History/TulalipTribes.png"
				},
				
				position: {
					title: "Software Developer I",
					description: "Developing tools, both web-based and desktop, for the Tulalip Indian Tribal Government. Tools include customized Content Management and Event Management Systems. Developed html 5 code to play videos and audio in pages.  Completed preview course on Html 5 and CSS 3."
				}
			},
			{
				company: {
					name: "Microsoft Game Studios",
					description: "Microsoft Studios is the video game production wing for Microsoft, responsible for the development and publishing of games for the Xbox, Xbox 360, Xbox One, Games for Windows, Steam, Windows Store, and Windows Phone platforms.",
					logo: "/images/Work History/Microsoft_Game_Studios_logo.png"
				},
				
				position: {
					title: "Application Dev & Test-CS - Test Associate 2",
					description: "Developed several internal browser based management tools for the Shield Teams.  Wrote test cases to test functionality of said tools.  Spent majority of contract developing tools for the Multiplayer team."
				}
			}
		];
	
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