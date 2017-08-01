'use strict'
const assert = require('chai').assert;


function ArithGeo(argument) {

   
	if(argument == undefined) { return "argument is empty: please enter array"}
	

	
	
	
	//codes to perform tests  still to be committed
	
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
     

	 describe('tests on ArithGeo',function(){
		it('checks for empty',function(){
			assert.equal(ArithGeo([]),0);
		})
		it('checks for Arithmetic Progression',function(){
			assert.equal(ArithGeo([3,7,11,15]),"Arithmetic")});
		
		it('checks for Geometric Progression',function(){
			assert.equal(ArithGeo([18,36,72,144,288]),"Geometric");
		})
		
		it('checks for neither Geometric Progression or Arithmetic Progression',function(){
			assert.equal(ArithGeo([18,2,36,4,72,8]),-1);
			assert.equal(ArithGeo([2,6,9]),-1);
		})
		it('checks if argument is an array',function() {
			assert.equal(ArithGeo(10),"argument is not an array");
		})
		it('checks to see if function catches numbers as invalid inputs',function(){
			assert.equal(ArithGeo(24234),"argument is not an array");
		})
		it('checks to see if function catches string as invalid inputs',function(){
			assert.equal(ArithGeo("emeka"),"argument is not an array");
		})
		it('checks to see if function catches whitespace as invalid inputs',function(){
			assert.equal(ArithGeo(),"argument is empty: please enter array");
		})
		it('checks to see if number of items in array is at least two',function(){
			assert.equal(ArithGeo([1]),"list should contain at least three elements");
			assert.equal(ArithGeo([50000,200000]),"list should contain at least three elements");
		})
		it('checks to see if any item in array is not number',function(){
			assert.equal(ArithGeo([120,'a',50]),-1);
		})
	})
	
            				
			
				
	
		
