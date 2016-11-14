'use strict';

angular.module('comicsApp')
  .config(function($stateProvider) {
    $stateProvider.state('comicsusers', {
      url: '/comicsusers',
      template: '<comicsusers></comicsusers>'
    });
  });
