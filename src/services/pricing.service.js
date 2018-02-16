( () => {
  'use strict' ;
  angular.module('calcApp')
  .service('pricingService',function(){
    var service = this ;

    service.data = {
      page_num : [{key : 1,label : '1 - 10',min : 1000,max : 2000}
        ,{key : 2,label : '10 - 50',min : 2000,max : 3000}
        ,{key : 3,label :'50 - 150',min : 3000,max : 6500}
        ,{key : 4,label : '150 - 250',min : 6500,max : 10000}] ,
      design_style : [{key : 1,label : 'No design',min : 0,max : 0}
        ,{key : 2,label :'Simple',min : 2000,max : 3000}
        ,{key : 3,label :'Moderate',min: 3000,max : 5000}
        ,{key : 4,label :'High-end',min: 5000,max : 10000}
        ,{key : 5,label : 'World Class',min : 10000,max : 15500}] ,
      compywriting_num_pages : [{key : 1,label : 'None',min : 0,max : 0}
        ,{key : 2,label : '5 - 10',min : 1000,max : 1500}
        ,{key : 3,label : '10 - 25',min : 1500,max : 3750}
        ,{key : 4,label : '25 - 50',min : 3750,max : 7500}] ,
      seo : [{key : 1,label : 'None',min : 0,max : 0}
        ,{key : 2,label : '30 Keywords',min : 2000,max : 4000}
        ,{key : 3,label : '80 Keywords',min : 4000,max : 6000}
        ,{key : 4,label : '150 Keywords',min : 6000,max : 10000}] ,
      responsive_design : [{key : 1,label : 'No',min : 0,max : 0}
        ,{key : 2,label : 'Yes',min : 3000,max : 3000}] ,
      db_integration : [{key : 1,label : 'None',min : 0,max : 0}
        ,{key : 2,label : 'Basic',min : 2000,max : 4000}
        ,{key : 3,label : 'Advanced',min : 4000,max : 10000}
        ,{key : 4,label : 'Full',min : 10000,max : 25000}] ,
      e_commerce : [{key : 1,label : 'None',min : 0,max : 0}
        ,{key : 2,label : 'Basic',min : 2000,max : 4000}
        ,{key : 3,label : 'Advanced',min : 4000,max : 10000}
        ,{key : 4,label : 'Enterprise',min : 10000,max : 25000}] ,
      cms : [{key : 1,label : 'None',min : 0,max : 0}
        ,{key : 2,label : 'Standard',min : 2000,max : 4000}
        ,{key : 3,label : 'Advanced',min : 4000,max : 10000}
        ,{key : 4,label : 'Enterprise',min : 10000,max : 25000}]
    } ;
    service.inputs = {page_num : 1
      ,design_style : 1
      ,compywriting_num_pages : 1
      ,seo : 1
      ,responsive_design : 1
      ,db_integration : 1
      ,e_commerce : 1
      ,cms : 1} ;
    service.cost = {
      min : 0
      ,max : 0
    };
    service.discount = 0.25 ;
    service.calculate = ()=>{
      let pn = service.data.page_num.find((element)=>{
        return element.key === service.inputs.page_num ;
      });
      let ds = service.data.design_style.find((element)=>{
        return element.key === service.inputs.design_style ;
      });
      let cnp = service.data.compywriting_num_pages.find((element)=>{
        return element.key === service.inputs.compywriting_num_pages ;
      });
      let seo = service.data.seo.find((element)=>{
        return element.key === service.inputs.seo ;
      });
      let rd = service.data.responsive_design.find((element)=>{
        return element.key === service.inputs.responsive_design ;
      });
      let db = service.data.db_integration.find((element)=>{
        return element.key === service.inputs.db_integration ;
      });
      let ec = service.data.e_commerce.find((element)=>{
        return element.key === service.inputs.e_commerce ;
      });
      let cms = service.data.cms.find((element)=>{
        return element.key === service.inputs.cms ;
      });
      let min = pn.min+ds.min+cnp.min+seo.min+rd.min+db.min+ec.min+cms.min ;
      let max = pn.max+ds.max+cnp.max+seo.max+rd.max+db.max+ec.max+cms.max ;
      service.cost.min = min ;
      service.cost.max = max ;
    };
    service.setDiscount = (discount_applied)=>{
      switch (discount_applied) {
        case 2:
          service.discount = 0.2 ;
          break;
        case 3:
          service.discount = 0.45 ;
          break;
        default:
          service.discount = 0.25 ;
      }
    }
    service.setInputs = (options) =>{
      service.inputs.page_num = options.pn ;
      service.inputs.design_style = options.ds ;
      service.inputs.compywriting_num_pages = options.cnp ;
      service.inputs.seo = options.seo ;
      service.inputs.responsive_design = options.rd ;
      service.inputs.db_integration = options.db ;
      service.inputs.e_commerce = options.ec ;
      service.inputs.cms = options.cms ;
    } ;
    service.getCost = () =>{
      return service.cost ;
    } ;
    service.getSale = ()=>{
      let min = service.cost.min-(service.discount*service.cost.min) ;
      let max = service.cost.max-(service.discount*service.cost.max) ;
      return {
        min : min
        ,max : max
      } ;
    } ;
    service.getPnum = (pn)=>{
      return service.data.page_num.find((element)=>{
        return element.key === pn ;
      }).label ;
    } ;
    service.getdStyle = (ds)=>{
      return service.data.design_style.find((element)=>{
        return element.key === ds ;
      }).label ;
    } ;
    service.getCnp = (cnp)=>{
      return service.data.compywriting_num_pages.find((element)=>{
        return element.key === cnp ;
      }).label ;
    } ;
    service.getSeo = (seo)=>{
      return service.data.seo.find((element)=>{
        return element.key === seo ;
      }).label ;
    } ;
    service.getRes = (rd)=>{
      return service.data.responsive_design.find((element)=>{
        return element.key === rd ;
      }).label ;
    } ;
    service.getDb = (db)=>{
      return service.data.db_integration.find((element)=>{
        return element.key === db ;
      }).label ;
    } ;
    service.getECommerce = (ec)=>{
      return service.data.e_commerce.find((element)=>{
        return element.key === ec ;
      }).label ;
    } ;
    service.getCms = (cms)=>{
      return service.data.cms.find((element)=>{
        return element.key === cms ;
      }).label ;
    } ;
    service.getPn = ()=>{
      return service.data.page_num.find((element)=>{
        return element.key === service.inputs.page_num ;
      }) ;
    } ;
    service.getdS = ()=>{
      return service.data.design_style.find((element)=>{
        return element.key === service.inputs.design_style ;
      }) ;
    } ;
    service.getCn = ()=>{
      return service.data.compywriting_num_pages.find((element)=>{
        return element.key === service.inputs.compywriting_num_pages ;
      }) ;
    } ;
    service.getSe = ()=>{
      return service.data.seo.find((element)=>{
        return element.key === service.inputs.seo ;
      }) ;
    } ;
    service.getRe = ()=>{
      return service.data.responsive_design.find((element)=>{
        return element.key === service.inputs.responsive_design ;
      }) ;
    } ;
    service.getD = ()=>{
      return service.data.db_integration.find((element)=>{
        return element.key === service.inputs.db_integration ;
      }) ;
    } ;
    service.getEC = ()=>{
      return service.data.e_commerce.find((element)=>{
        return element.key === service.inputs.e_commerce ;
      }) ;
    } ;
    service.getCm = ()=>{
      return service.data.cms.find((element)=>{
        return element.key === service.inputs.cms ;
      }) ;
    } ;
    service.getQuote = () => {
      return `Number of pages: ${service.getPnum(service.inputs.page_num)} \n
Style of design: ${service.getdStyle(service.inputs.design_style)}\n
Copywriting # of pages: ${service.getCnp(service.inputs.compywriting_num_pages)}\n
SEO w/ Placement Guarantee: ${service.getSeo(service.inputs.seo)}\n
Responsive Design: ${service.getRes(service.inputs.responsive_design)}\n
Database Integration: ${service.getDb(service.inputs.db_integration)}\n
e-Commerce Functionality: ${service.getECommerce(service.inputs.e_commerce)}\n
CMS: ${service.getCms(service.inputs.cms)}\n
`
    } ;
    service.getTableArray = () => {
      var table = [] ;
      var element1 = {} ;
      element1.genre = 'NUMBER OF PAGES:' ;
      element1.choice = service.getPn() ;
      table.push(element1) ;
      var element2 = {} ;
      element2.genre = 'STYLE OF DESIGN:' ;
      element2.choice = service.getdS() ;
      table.push(element2) ;
      var element3 = {} ;
      element3.genre = 'COPYWRITING # OF PAGES:' ;
      element3.choice = service.getCn() ;
      table.push(element3) ;
      var element4 = {} ;
      element4.genre = 'SEO w/ PLACEMENT GUARANTEE:' ;
      element4.choice = service.getSe() ;
      table.push(element4) ;
      var element5 = {} ;
      element5.genre = 'RESPONSIVE DESIGN:' ;
      element5.choice = service.getRe() ;
      table.push(element5) ;
      var element6 = {} ;
      element6.genre = 'DATABASE INTEGRATION:' ;
      element6.choice = service.getD() ;
      table.push(element6) ;
      var element7 = {} ;
      element7.genre = 'E-COMMERCE FUNCTIONALITY:' ;
      element7.choice = service.getEC() ;
      table.push(element7) ;
      var element8 = {} ;
      element8.genre = 'CMS :' ;
      element8.choice = service.getCm() ;
      table.push(element8) ;
      return table ;
    }
}) ;
})()
