(function () {
  'use strict';
  angular.module('calcApp')
  .service('mailService',mailService) ;
  mailService.$inject = ['pricingService'] ;
  function mailService (pricingService) {
    var service = this ;
    service.quote = `` ;
    service.cost = {
      min : 0
      ,max : 0
    } ;
    service.sale = {
      min : 0
      ,max : 0
    } ;
    service.setQuote = (quote) => {
      service.quote = quote ;
    } ;
    service.setCost = () => {
      service.cost = pricingService.cost ;
    } ;
    service.setSale = () => {
      service.sale = pricingService.getSale() ;
    } ;
  } ;
})()
