/*
  dependencies injection
  ====================================================================
*/
/*
 ------------------------------------------------------------------------------
 var service = {locationService:{
                            parse:function(){
                                    alert('parse address bar');
                                  }
                           }             
            }; 
 var func = function(locationService,routeService){
        locationService.parse();
 }
 console.log(func.toString());
 var dependencies = func.toString().match(/function\s*\(\s*(.*)\s*\)/);
 console.log(dependencies);
 var dependencies = dependencies[1].split(",");
 console.log(dependencies);
 var params = dependencies.map(function(item){
     return service[item];
 })
 func.apply(null,params);
 */
