'use strict';

angular.module('ngWalkthrough.home', ['ngRoute', 'ngWalkthrough.story'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
    });
}])

.controller('HomeController', homeController);

homeController.$inject = ['storyService'];

function homeController(storyService) {
    var vm = this;
    
    vm.story = storyService.getStory();
}