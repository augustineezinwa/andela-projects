const assert = require('chai').assert
const Car = require('c:/py/Car.js').Car
const mercedes = require('c:/py/Car.js').mercedes
const volkswagen = require('c:/py/Car.js').volkswagen
const jeep = require('c:/py/Car.js').jeep
const toyota = require('c:/py/Car.js').toyota
//test Car.js

 let car = new 	Car("V2O","yellow",10,2); // creating a new car object
 console.log(car.getModel());   //testing fields in car
 console.log(car.getColor());
 console.log(car.getSpeed());
 console.log(car instanceof Car)
 console.log(car.color)
 
 

 let beetle = new volkswagen("Volkswagen 1995 model", "black",2,3,10)
 let camry = new toyota("CAMRY 2010 MODEL","navyblue",1,3);
 let suv = new jeep("SUV 2018","ash",0, 4,"FOUR WHEEL DRIVE");
 let vboot = new mercedes("VBOOT 190","white",0, 4);
 

 
describe('tests on Car.js',function(){
		it('checks to see if object car is an instance of class car',function(){
			assert.equal(car instanceof Car,true);
		})
		it('testing fields in object car',function(){
	
			assert.equal(car.color,"yellow");
			assert.equal(car.model,"V2O");
			assert.equal(car.speed,10);
			assert.equal(car.gear,2);  
		})
		
		it('testing methods in object car',function(){
			car.setColor("blue");
			assert.equal(car.getColor(),"blue");
			assert.equal(car.applyBrake(),"0 car stopped!");
			car.setSpeed(300);
			assert.equal(car.setSpeed(300),"speed is valid");
			assert.equal(car.getSpeed(),300);
			car.accelerate(10);
			assert.equal(car.getSpeed(),310);
		})
		
		
		
		it('testing field modelnumber in vboot an object/type of mercedes',function() {
			assert.equal(vboot.model,"VBOOT 190");
		})
		it('testing field color in vboot',function(){
			assert.equal(vboot.color,"white");
		})
		it('testing field gear in vboot',function(){
			assert.equal(vboot.gear,4);
		})
		it('testing field speed in vboot',function(){
			assert.equal(vboot.speed,0);
		})
		it('testing method applyBrake in super Class Car, testing if vboot inherits from car',function(){
			assert.equal(vboot.applyBrake(),"0 car stopped!");
			assert.equal(vboot.getSpeed(),0);
		})
		it('testing overidding method setSpeed() in vboot, also testing for polymorphism,vboot behaves in a particular way',function(){
			assert.equal(vboot.setSpeed(200),"mercedes warns user: please tighten your seatbelt: safety first");
			assert.equal(vboot.getSpeed(),200);
		})
		it('testing method accelerate() in mercedes',function(){
			assert.equal(vboot.getSpeed(),200);
			vboot.accelerate(23);
			assert.equal(vboot.getSpeed(),223);
		})
		it('testing field modelno in camry , a brand of toyota',function() {
			assert.equal(camry.model,"CAMRY 2010 MODEL");
		})
		it('testing field color in camry, a brand of toyota',function(){
			assert.equal(camry.color,"navyblue");
		})
		it('testing field gear in camry, a brand of toyota',function(){
			assert.equal(camry.gear,3);
		})
		it('testing field speed in camry, a brand of toyota',function(){
			assert.equal(camry.speed,1);
		})
		it('testing method setSpeed() in toyota ,testing for polymorphism toyota works in a different way but all use the same method setSpeed()',function(){
			assert.equal(camry.setSpeed(99),"toyota radio is on, antenna goes up");
			assert.equal(camry.setSpeed(220),"warning on toyota dash board,please reduce speed");
		})
		it('testing method accelerate() in toyota, checking to see if toyota inherits method from super class Car ',function(){
			assert.equal(camry.getSpeed(),220);
			camry.accelerate(58);
			assert.equal(camry.getSpeed(),278);;
		})
		it('testing to see if object camry is an instance of toyota',function(){
			assert.equal(camry instanceof toyota,true);
		})
		it('testing to see if  suv is an instance of jeep',function(){
			assert.equal(suv instanceof jeep,true);
		})
		it('testing isMoving() method on suv a type of jeep ',function(){
			assert.equal(suv.applyBrake(),"0 car stopped!");
			assert.equal(suv.isMoving(),false)
		})
		it('testing for field color in beetle a model of volkswagen',function(){
			assert.equal(beetle.color,"black");
		})
		it('testing for model no in beetle a brand of volkswagen',function(){
			assert.equal(beetle.model,"Volkswagen 1995 model");
		})
		it('testing to see if beetle is an instance of volkswagen',function(){
			assert.equal(beetle instanceof volkswagen,true);
		})
		it('testing to see if applyBrake() method is valid in volkswagen',function(){
			assert.equal(beetle.applyBrake(),"0 car stopped!");
		})
		
		it('testing overidding method setSpeed in brake, also testing for polymorphism,to see how mercedes behaves.',function(){
			assert.equal(vboot.setSpeed(200),"mercedes warns user: please tighten your seatbelt: safety first");
			assert.equal(vboot.getSpeed(),200);
		})
		
		it('testing behaviour in vboot if user exceeds speed 100',function(){
			assert.equal(vboot.setSpeed(320),"mercedes warns user: please tighten your seatbelt: safety first");
		})
		it('testing polymorphism in suv, suv ,camry using the same getModel() method but responding in different ways',function(){
		   assert.equal(suv.getModel(),"JEEP SUV 2018 with FOUR WHEEL DRIVE"); 
		})
		it('testing for how many wheelDrives in suv',function(){
		   assert.equal(suv.getwheelDrive(),"FOUR WHEEL DRIVE"); 
		})
		it('hidden test! testing for if user enter negative value in argument',function(){
		   assert.equal(suv.setSpeed(20),"speed is valid");
		   assert.equal(suv.setSpeed(-20),"speed is invalid");   //suv is inheriting method from car
		   
		})
		it('hidden! hidden!',function(){
			assert.equal(suv.getSpeed(),0);
			assert.equal(beetle.reduceSpeed(11),"Car might tumble!")
		})
		it('hidden! hidden! hidden!',function() {
			assert.equal(beetle.getSpeed(),0);
			beetle.accelerate(50);
			assert.equal(beetle.getSpeed(50),50)
		})
})
	
console.log(vboot.getSpeed());
console.log(camry.getSpeed());	
	
	
