'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($rootScope, Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.isLoggedIn = Auth.isLoggedIn;
    this.$rootScope = $rootScope;
    $(".button-collapse").sideNav();
    this.$rootScope.login = false;

  }

  $onInit(){

  }



}

angular.module('comicsApp')
  .controller('NavbarController', NavbarController);
