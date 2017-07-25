'use strict';

const myApp = angular.module('funWithStuff', []);

// creating a controller-- every controller will look like this-- always takes 2 properties; name of controller and a function passing in $scope
myApp.controller('MessageController', function($scope) {
	$scope.message = "Hello, world!";
});

myApp.controller("CountController", function($scope) {
	$scope.count = () => 12
});






