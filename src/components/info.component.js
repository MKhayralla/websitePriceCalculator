(function  () {
  'use strict';
  angular.module('calcApp')
  .component('info',{
    templateUrl : 'src/components/info.component.html'
    ,controller : infoCtrl
  });
  infoCtrl.$inject=['mailService'];
  function infoCtrl (mailService) {
    var ctrl = this ;
    ctrl.info = {
      name :''
      ,email : ''
      ,phone : ''
      ,company : ''
      ,message : ''
    } ;
    ctrl.sendInfo = () =>{
      mailService.setInfo(ctrl.info) ;
    }
  }
})()
