(function () {
  'use strict';
  angular.module('calcApp')
  .component('statistics',{
    templateUrl : 'src/components/statistics.component.html'
    ,controller : statCtrl
  }) ;
  statCtrl.$inject = ['pricingService','mailService'];
  function statCtrl(pricingService,mailService) {
    var ctrl = this ;
    ctrl.cost = pricingService.cost ;
    ctrl.sale = ctrl.cost ;
    ctrl.saleApplied = false ;
    ctrl.info = {} ;
    ctrl.quote = mailService.quote ;
    ctrl.table = pricingService.getTableArray();
    ctrl.setSale = (discount) => {
      pricingService.setDiscount(discount) ;
      mailService.setSale() ;
      ctrl.sale = pricingService.getSale() ;
      ctrl.saleApplied = true ;
    } ;
    ctrl.cancelSale = () => {
      ctrl.saleApplied = false ;
    } ;
  } ;
})()
