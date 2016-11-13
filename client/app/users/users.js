'use strict';

angular.module('comicsApp')
  .config(function($stateProvider) {
    $stateProvider.state('users', {
      url: '/users',
      template: '<users></users>'
    });
  });
