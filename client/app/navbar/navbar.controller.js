'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($rootScope, Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.$rootScope = $rootScope;
    $(".button-collapse").sideNav();
    this.$rootScope.login = false;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isUser = Auth.isUser;

  }

  $onInit(){

  }

  logout(){
    let aux = this;
    var response = aux.Auth.logout();
    if (response === true) {
      aux.$state.go('home');
      Materialize.toast('Ingrese de nuevo para seguir navegando', 5000);
    }
  }

}

angular.module('comicsApp')
  .controller('NavbarController', NavbarController);
