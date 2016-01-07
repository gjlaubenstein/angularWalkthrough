'use strict';

// Declare app level module which depends on views, and components
angular.module('ngWalkthrough', [
  'ngRoute',
  'ngWalkthrough.home',
  'ngWalkthrough.story'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
