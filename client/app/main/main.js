'use strict';

angular.module('workspaceApp')
  .config(function($routeProvider) {
    //if(!loggedIn){
      $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
   // }
  });
