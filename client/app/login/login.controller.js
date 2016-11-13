'use strict';

(function() {

  class LoginController {

    constructor($rootScope, Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;
      this.isLoggedIn = Auth.isLoggedIn;
      this.$rootScope = $rootScope;
      this.errors = false;
    }

    $onInit() {

    }

    login(form){
      let aux = this;
      aux.submitted = true;

      if (form.$valid && aux.user) {
        var response = aux.Auth.login(aux.user);

        if (response === undefined) {
          aux.errors = true;
        }
        else {
          aux.$rootScope.currentUser = response;
          aux.$rootScope.login = true;
          aux.$state.go('home');
        }
      }
    }

    validacion(){
      let aux = this;
      if (aux.$rootScope.login === true) {
        this.$state.go('home');
      }
    }

  }

  angular.module('comicsApp')
    .component('login', {
      templateUrl: 'app/login/login.html',
      controller: LoginController,
      controllerAs: 'lc'
    });
})();
