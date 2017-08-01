function AritGeo(argument) {
	
	//codes to perform tests  still to be committed
	let len = argument.length;
	let commonDiff = argument[1]-argument[0];
	let ratio = argument[1]/argument[0]
	
	
    if (argument instanceof Array) {
	    if (argument.length == 0) {
		return 0; }
	
	if (argument.length > 2) {
	 if(checkAP(argument)) { return "arithmetricProgression"} else 
	 if(checkGP(argument))  {return "geometicProgression" }  else
		 {
			return -1
		 }
		 
	}  else {
		return "list should contain at least three elements"
		
	}
	} else { 
	    return "argument is not an array"}
	function checkAP(argument) {
		for (let i = 0; i<argument.length-1 ;i++) {
			if(argument[i+1]-argument[i] != commonDiff) {
				return 0;
			}
			
		}
		return 1;
	}
	
	function checkGP(argument)  {
		for(let i = 0; i<argument.length-1; i++) {
			if(argument[i+1]/argument[i] != ratio) {
				return 0;
				
		}
		
	}
	
	return 1
	}
	
	}
	
	
	
	
	
	
	

                 				
			
						
			

	
	
		


console.log(AritGeo([]));
