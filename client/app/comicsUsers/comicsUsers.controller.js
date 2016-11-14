'use strict';

(function() {

  class ComicsUsersController {

    constructor($rootScope, Comic, $state) {
      this.$rootScope = $rootScope;
      this.Comic = Comic;
      this.$state = $state;
      this.role = '';
      $('select').material_select();
      $('.modal').modal();
    }

    validacion(){
      let aux = this;
      if (aux.$rootScope.login === false) {
        aux.$state.go('home');
      }
    }

  }

  angular.module('comicsApp')
    .component('comicsusers', {
      templateUrl: 'app/comicsUsers/comicsUsers.html',
      controller: ComicsUsersController,
      controllerAs: 'cuc'
    });
})();
