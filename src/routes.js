(function () {
  'use strict';
  angular.module('calcApp')
  .config(routesConfig) ;
  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'] ;
  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('calculate',{
      url : '/',
      template : '<calculate></calculate>'
    })
    .state('statistics',{
      url : '/statistics' ,
      template : '<statistics></statistics>'
    })
;
  }
})()
