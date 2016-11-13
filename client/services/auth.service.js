'use strict';

function serviceAuth($rootScope) {

  var currentUser = {};

  function isLoggedIn() {
    if($rootScope.login === false) {
      return false;
    }
    else {
      return true;
    }
  }

  function getCurrentUser() {
    if(currentUser === {}) {
      return null;
    }
    else {
      return currentUser;
    }
  }

  function login(user) {
    var response = "";
    users.forEach(userr => {
      if(user.user === userr.user && user.password === userr.password){
        currentUser = angular.copy(userr);
        delete currentUser.password;
        response = currentUser;
      }
      else{
        response = null;
      }
    });
    return response;
  }

  function logout() {
    var response = "";
    $rootScope.login = false;
    delete $rootScope.currentUser;
    response = true;
    return response;
  }

  function isAdmin() {
    if($rootScope.login === true && $rootScope.currentUser.role === 'ADMIN') {
      return true;
    }
    else {
      return false;
    }
  }

  function isUser() {
    if($rootScope.login === true && ($rootScope.currentUser.role === 'USER' || $rootScope.currentUser.role === 'EMPLOYEE')) {
      return true;
    }
    else {
      return false;
    }
  }

  function getUsers() {
    var response = users;
    return response;

  }


  var service = {
    isLoggedIn: isLoggedIn,
    getCurrentUser: getCurrentUser,
    login: login,
    logout: logout,
    isAdmin: isAdmin,
    isUser: isUser,
    getUsers: getUsers
  };

  var users = [{
    _id:'577400f503c12db2197dd092',
    user: 'james.garzon',
    names: 'JAMES',
    lastnames: 'GARZÓN',
    documento: '1040040988',
    city : 'MEDELLIN',
    phone : '312242563',
    email: 'james.garzon@comics.com',
    password: 'james',
    role :'USER'
  }, {
    _id:'5774016f4dd1ca16267f42db',
    user: 'camilo.guerra',
    names: 'CAMILO',
    lastnames: 'GUERRA',
    documento : '1152203500',
    city : 'MEDELLIN',
    phone :  '312242563',
    email: 'camilo.guerra@comics.com',
    password: 'camilo',
    role : 'EMPLOYEE'
  },{
    _id:'577400f503c12db2197dd093',
    user: 'catalina.osorno',
    names: 'CATALINA',
    lastnames: 'OSORNO',
    documento: '1040040981',
    city : 'MEDELLIN',
    phone : '312242583',
    email: 'catalina.osorno@comics.com',
    password: 'catalina',
    role :'USER'
  }, {
    _id:'5774016f4dd1ca16267f42d0',
    user: 'nelson.salazar',
    names: 'NELSON',
    lastnames: 'SALAZAR',
    documento : '1152203501',
    city : 'LA ESTRELLA',
    phone :  '312252763',
    email: 'nelson.salazar@comics.com',
    password: 'nelson',
    role : 'EMPLOYEE'
  }, {
    _id:'5774016f4dd1ca16267f42dd',
    user: 'esteban.salazar',
    names: 'ESTEBAN',
    lastnames: 'SALAZAR',
    documento : '1039455449',
    ciudad : 'SABANETA',
    telefono :  '5435672892',
    email: 'esteban.salazar@comics.com',
    password: 'esteban',
    role: 'ADMIN'
  }];

  return service;

}

angular.module('comicsApp')
  .factory('Auth', serviceAuth);

serviceAuth.$inject = ['$rootScope'];
