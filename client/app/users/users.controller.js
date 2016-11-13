'use strict';

(function() {

  class UsersController {

    constructor($rootScope, Auth) {
      this.$rootScope = $rootScope;
      this.Auth = Auth;
    }

    $onInit() {

    }

  }

  angular.module('comicsApp')
    .component('users', {
      templateUrl: 'app/users/users.html',
      controller: UsersController,
      controllerAs: 'uc'
    });
})();
