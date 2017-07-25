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



