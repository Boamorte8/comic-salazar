'use strict';

angular.module('comicsApp')
  .directive('navbar', () => ({
    templateUrl: 'app/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
