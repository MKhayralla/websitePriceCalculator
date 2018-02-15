(function  () {
  'use strict' ;
  angular.module('calcApp')
  .component('calculate',{
    templateUrl : 'src/components/calculate.component.html'
    ,controller : calculateCtrl
  }) ;
  calculateCtrl.$inject = ['pricingService','mailService'];
  function calculateCtrl (pricingService,mailService) {
    var ctrl = this ;
    ctrl.inputs = {
      pn : 1
      ,ds : 1
      ,cnp : 1
      ,seo : 1
      ,rd : 1
      ,db : 1
      ,ec : 1
      ,cms : 1
    } ;
    ctrl.labels = {
      page_num : pricingService.getPnum(ctrl.inputs.pn)
      ,design : pricingService.getdStyle(ctrl.inputs.ds)
      ,cnp : pricingService.getCnp(ctrl.inputs.cnp)
      ,seo : pricingService.getSeo(ctrl.inputs.seo)
      ,rd : pricingService.getRes(ctrl.inputs.rd)
      ,db : pricingService.getDb(ctrl.inputs.db)
      ,ec : pricingService.getECommerce(ctrl.inputs.ec)
      ,cms : pricingService.getCms(ctrl.inputs.cms)
    } ;
    ctrl.setLabels = ()=>{
      ctrl.labels.page_num = pricingService.getPnum(ctrl.inputs.pn) ;
      ctrl.labels.design = pricingService.getdStyle(ctrl.inputs.ds) ;
      ctrl.labels.cnp = pricingService.getCnp(ctrl.inputs.cnp) ;
      ctrl.labels.seo = pricingService.getSeo(ctrl.inputs.seo) ;
      ctrl.labels.rd = pricingService.getRes(ctrl.inputs.rd) ;
      ctrl.labels.db = pricingService.getDb(ctrl.inputs.db) ;
      ctrl.labels.ec = pricingService.getECommerce(ctrl.inputs.ec) ;
      ctrl.labels.cms = pricingService.getCms(ctrl.inputs.cms) ;
    } ;
    ctrl.options1 = {
      floor : 1
      ,ceil : 4
      ,step : 1
      ,showTicks: true
      ,hideLimitLabels: true
      ,hidePointerLabels: true
      ,onChange : ctrl.setLabels
    } ;
    ctrl.options2 = {
      floor : 1
      ,ceil : 2
      ,step : 1
      ,showTicks: true
      ,hideLimitLabels: true
      ,hidePointerLabels: true
      ,onChange : ctrl.setLabels
    } ;
    ctrl.options3 = {
      floor : 1
      ,ceil : 5
      ,step : 1
      ,showTicks: true
      ,hideLimitLabels: true
      ,hidePointerLabels: true
      ,onChange : ctrl.setLabels
    } ;
    ctrl.calc = ()=>{
      pricingService.setInputs(ctrl.inputs) ;
      pricingService.calculate() ;
      mailService.setQuote(ctrl.labels);
      mailService.setCost() ;
    } ;
  }
})()
