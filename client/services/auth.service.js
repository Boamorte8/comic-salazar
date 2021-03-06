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
    var resp = false;
    users.forEach(userr => {
      if(user.user === userr.user && user.password === userr.password){
        currentUser = angular.copy(userr);
        delete currentUser.password;
        resp = true;
      }
      else{
        response = null;
      }
    });
    if (resp === true) {
      response = currentUser;
    }
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

  function createUser(newUser) {
    var resp = users.some(user => user.documento === newUser.documento);
    var response = false;
    newUser.names = newUser.names.toUpperCase();
    newUser.lastnames = newUser.lastnames.toUpperCase();
    newUser.city = newUser.city.toUpperCase();

    if (resp === false) {
      users.push(newUser);
      response = true;
    }
    return response;

  }

  var service = {
    isLoggedIn: isLoggedIn,
    getCurrentUser: getCurrentUser,
    login: login,
    logout: logout,
    isAdmin: isAdmin,
    isUser: isUser,
    getUsers: getUsers,
    createUser: createUser
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
    phone : '313242583',
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
    phone :  '314252763',
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
    telefono :  '54372892',
    email: 'esteban.salazar@comics.com',
    password: 'esteban',
    role: 'ADMIN'
  }];

  return service;

}

angular.module('comicsApp')
  .factory('Auth', serviceAuth);

serviceAuth.$inject = ['$rootScope'];
