'use strict';

function serviceComic() {

  var currentUser = {};

  function isLoggedIn() {
    if($rootScope.login === false) {
      return false;
    }
    else {
      return true;
    }
  }



  var comics = [{
    _id:'577400f503c12db2197dd092',
    user: 'james.garzon',
    names: 'JAMES'

  }, {
    _id:'5774016f4dd1ca16267f42db',
    user: 'camilo.guerra',
    names: 'CAMILO'

  },{
    _id:'5774016f4dd1ca16267f42dd',
    user: 'esteban.salazar',
    names: 'ESTEBAN'

  }];

  var service = {

  };

  return service;

}

angular.module('comicsApp')
  .factory('Comic', serviceComic);
