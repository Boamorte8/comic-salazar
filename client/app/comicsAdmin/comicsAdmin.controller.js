'use strict';

(function() {

  class ComicsAdminController {

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

    addComic(newComic){
      let aux = this;
      if(newComic === undefined || newComic.title === undefined || newComic.description === undefined || newComic.image === undefined){
        aux.errors = true;
      } else {
        var response = aux.Comic.addComic(newComic);
        if (response === true) {
          $('#modalAddComic').modal('close');
          aux.comics = aux.Comic.getComics();
          Materialize.toast('Comic añadido exitosamente', 6000);
          aux.newComic = {};
        }
        else {
          Materialize.toast('El comic ya existe', 6000);
        }
      }
    }

    editComic(){
      let aux = this;
      if(aux.selectedComic === undefined || aux.selectedComic.title === undefined || aux.selectedComic.description === undefined || aux.selectedComic.image === undefined || aux.selectedComic.title === '' || aux.selectedComic.image === '' || aux.selectedComic === ''){
        aux.errors = true;
      }
      else {
        var response = aux.Comic.editComic(aux.selectedComic);
        if (response === true) {
          $('#modalEditComic').modal('close');
          aux.comics = aux.Comic.getComics();
          Materialize.toast('Comic editado exitosamente', 6000);
        }
        else {
          Materialize.toast('No se pudo editar. Inténtalo mas tarde.', 6000);
        }
      }

    }

    deleteComment(index){
      console.log(index);
      Materialize.toast('Funcionalidad en contrucción', 6000);
    }

  }

  angular.module('comicsApp')
    .component('comicsadmin', {
      templateUrl: 'app/comicsAdmin/comicsAdmin.html',
      controller: ComicsAdminController,
      controllerAs: 'cac'
    });
})();
