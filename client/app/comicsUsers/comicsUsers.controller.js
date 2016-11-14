'use strict';

(function() {

  class ComicsUsersController {

    constructor($rootScope, Comic, $state) {
      this.$rootScope = $rootScope;
      this.Comic = Comic;
      this.$state = $state;
      this.role = '';
      this.numberComicsShows = 9;
      this.showoff = false;
      $('select').material_select();
      $('.modal').modal();
    }

    $onInit(){
      this.comics = this.Comic.getComics();
      this.comicslength = this.comics.length;
      if(this.numberComicsShows >= this.comicslength){
        this.showoff = true;
      }
    }

    validacion(){
      let aux = this;
      if (aux.$rootScope.login === false) {
        aux.$state.go('home');
      }
    }

    showMore(){
      let aux = this;
      this.numberComicsShows += 6;
      if(aux.numberComicsShows >= aux.comicslength){
        aux.showoff = true;
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
