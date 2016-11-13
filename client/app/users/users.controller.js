'use strict';

(function() {

  class UsersController {

    constructor($rootScope, Auth, $state) {
      this.$rootScope = $rootScope;
      this.Auth = Auth;
      this.$state = $state;
      this.types = ['EMPLOYEE', 'USER'];
      this.role = '';
      $('select').material_select();
      $('.modal').modal();
    }

    $onInit() {
      this.users = this.Auth.getUsers();
    }

    validacion(){
      let aux = this;
      if (aux.$rootScope.login === false) {
        aux.$state.go('home');
      }
    }

    setRole(role){
      console.log(role);
    }

    edit(user){
      Materialize.toast('Funcionalidad en contrucción', 6000);
    }

  }

  angular.module('comicsApp')
    .component('users', {
      templateUrl: 'app/users/users.html',
      controller: UsersController,
      controllerAs: 'uc'
    });
})();
