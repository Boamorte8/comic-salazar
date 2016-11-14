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

    validate(password){

    }

    createUser(newUser){
      let aux = this;
      if(newUser === undefined || newUser.names === undefined || newUser.lastnames === undefined || newUser.documento === undefined || newUser.user === undefined || newUser.city === undefined || newUser.phone === undefined || newUser.email === undefined || newUser.password === undefined || newUser.role === undefined){
        aux.errors = true;
      } else {
        var response = aux.Auth.createUser(newUser);
        if (response === true) {
          $('#modalCreateUser').modal('close');
          aux.users = aux.Auth.getUsers();
          Materialize.toast('Usuario creado exitosamente', 6000);
          aux.newUser = {};
        }
        else {
          Materialize.toast('El usuario ya existe', 6000);
        }
      }
    }

  }

  angular.module('comicsApp')
    .component('users', {
      templateUrl: 'app/users/users.html',
      controller: UsersController,
      controllerAs: 'uc'
    });
})();
