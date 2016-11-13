'use strict';

(function() {

  class HomeController {

    constructor($http) {
      this.$http = $http;
    }

    $onInit() {

    }

  }

  angular.module('comicsApp')
    .component('home', {
      templateUrl: 'app/home/home.html',
      controller: HomeController,
      controllerAs: 'hc'
    });
})();
