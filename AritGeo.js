'use strict'

// 10 test codes for ArithGeo
module.exports = function ArithGeo(argument) {

   
	if(argument == undefined) { return "argument is empty: please enter array"}
	
	if (Array.isArray(argument)) {	
	
	    
		if (argument.length == 0) {  
		return 0; }
		
		
	if (argument.length > 2) {
	 if(checkAP(argument)) { return "Arithmetic"} else 
	 if(checkGP(argument))  {return "Geometric" }  else
		 {
			return -1
		 }
		 
	}  else {
		return "list should contain at least three elements"
		} 
	}
	 else { 
	    return "argument is not an array"}
	
	function checkAP(argument) {
		
		let commonDiff = argument[1]-argument[0]; 
		for (let i = 0; i<argument.length-1 ;i++) {
			if(argument[i+1]-argument[i] != commonDiff) {
				return 0;
			}
			
		}
		return 1; }
	
	
	function checkGP(argument)  {
		let ratio = argument[1]/argument[0]; 
		for(let i = 0; i<argument.length-1; i++) {
			if(argument[i+1]/argument[i] != ratio) {
				return 0;
				
		}
		
	}
	
	return 1
	}
	
	      
		
}
     

	 
            				
			
				
	
		
