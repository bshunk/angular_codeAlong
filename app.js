'use strict';

const myApp = angular.module('funWithStuff', []);

// creating a controller-- every controller will look like this-- always takes 2 properties; name of controller and a function passing in $scope
myApp.controller('MessageController', function($scope) {
	$scope.message = "Hello, world!";
});

myApp.controller("CountController", function($scope) {
	$scope.count = () => 12;
});

myApp.controller("NameController", function($scope) {
	$scope.name = "Broomhilda";
});

myApp.controller("SecondNameController", function($scope) {
	$scope.name = "Larry";
	$scope.wow = "Parents controller gave me this";
});

myApp.controller("TodoController", function($scope) {
	$scope.todos = [
		{ name: "Master HTML/CSS/JS", completed: true},
		{ name: "Learn AngularJS", completed: false},
		{ name: "Get started With EpressJS", completed: false},
		{ name: "Be Awesome!", completed: true}
	]
});

// simple provider
myApp.value("score", {points: 10});

// Another provider. Also makes data available to our app
myApp.factory("dongFactory", function() {
	
});

myApp.controller("ScoreController", function($scope, score) {
	// do something that requires the score value
	$scope.scoreCount = score.points;
});




























