'use strict';

angular.module('comicsApp')
  .config(function($stateProvider) {
    $stateProvider.state('login', {
      url: '/',
      template: '<login></login>'
    });
  });
