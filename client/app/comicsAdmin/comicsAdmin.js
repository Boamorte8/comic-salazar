'use strict';

angular.module('comicsApp')
  .config(function($stateProvider) {
    $stateProvider.state('comicsadmin', {
      url: '/comics',
      template: '<comicsadmin></comicsadmin>'
    });
  });
