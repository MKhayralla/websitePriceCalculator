(function () {
  'use strict';
  angular.module('calcApp')
  .config(routesConfig) ;
  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'] ;
  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl : 'src/home.html'
    })
    .state('info',{
      url : '/info' ,
      template : '<info></info>'
    })
    .state('calculate',{
      url : '/calculate' ,
      template : '<calculate></calculate>'
    })
    .state('statistics',{
      url : '/statistics' ,
      template : '<statistics></statistics>'
    })
;
  }
})()
