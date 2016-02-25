'use strict';

var myApp= angular.module('myApp',[]);

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


function parkingCtrl($scope) {
  $scope.nombre="Lorenzo";
  $scope.appTitle = "[Packt] Parking";
$scope.nombre2="joseiiito";
$scope.newOrders=300;
$scope.bounceRate=500;
$scope.users=700;
$scope.visitors=900;
$scope.cars = [
{plate: '6MBV006'},
{plate: '5BBM299'},
{plate: '5AOJ230'}
];
}



myApp.controller('parkingCtrl', parkingCtrl); 