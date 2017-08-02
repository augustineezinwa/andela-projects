

 class Car {
	
	constructor(model,color,speed,gear) {
        this.model = model;
        this.color = color;
        this.speed = speed;
		this.gear = gear;
        

    }
	getColor() { return this.color;}
	getSpeed() {return this.speed;}
	getGear() {return this.gear;}
	setSpeed(num){ if (num < 0) { this.speed = 0; return "speed is invalid" } else {this.speed = num; return "speed is valid"}}
	setColor(color) {this.color = color;}
	accelerate(num) {this.speed += num;}
	reduceSpeed(num) { if(num <0) { return "invalid input"} else { this.speed -=num;
	if(this.speed==0) {return "Car stopped"} else { if(this.speed<0) { this.speed = 0; return "Car might tumble!"} else {return "Car slowed down"} } }}
	getModel() {return this.model}
	applyBrake() {this.speed=0; return this.speed + " car stopped!"}
	isMoving() { if(this.speed>0) {return true} else {return  false} }
}

class mercedes extends Car {
	
	setSpeed(num) {
		super.setSpeed(num);
		if(this.speed >100) {return "mercedes warns user: please tighten your seatbelt: safety first"
	} else {return "mercedes : i still advise that you tighten your seatbelt"}
	}
	getModel() { return "MERCEDES "+ super.getModel() }
}

class toyota extends Car{
	setSpeed(num) {
		super.setSpeed(num);
	if(this.speed>100) {return "warning on toyota dash board,please reduce speed"}else {return "toyota radio is on, antenna goes up"} }
		getModel() {  return " TOYOTA  " +  super.getModel() }
}

class jeep extends Car{
	constructor(model,color,speed,gear,wheelDrive) {
	super(model,color,speed,gear) ;
	this.wheelDrive = wheelDrive;
	}
	    getwheelDrive() { return this.wheelDrive; }
		getModel() {return "JEEP " + super.getModel() + " with " + this.wheelDrive}
	
}

class volkswagen extends Car{
	constructor(model,color,speed,gear,exhaustPipe) {
	super(model,color,speed,gear);
	this.exhaustPipe = exhaustPipe;
}
    getModel() {return "volkswagen " + super.getModel() }

}


//test Car.js

 let car = new 	Car("V2O","yellow",10,2); // creating a new car object
 console.log(car.getModel());   //testing fields in car
 console.log(car.getColor());
 console.log(car.getSpeed());
 console.log(car instanceof Car)
 console.log(car.color)
 let beetle = new volkswagen("Volks1995 model", "black",2,3,2);
 console.log(car.accelerate(20));
 console.log(car.getSpeed());   //testing car behaviour / speed increased from 10 to 30
 console.log(car.setSpeed(200)) // testing for deep behaviour
 let camry = new toyota("CAMRY 2010 MODEL","navyblue",1,3);
 let suv = new jeep("SUV 2018","ash",0, 4,"FOUR WHEEL DRIVE");
 let vboot = new mercedes("VBOOT 190","white",0, 4);
 console.log(camry.getModel());  //checking for polymorphism in camry
 console.log(suv.getModel()); // checking for polymorphism in suv , notice how suv and camry use the same .getModel() but behave in a different way
 console.log(vboot.setSpeed(300))  //testing behaviour in vboot if user exceeds 200
 console.log(vboot.getModel())   // querying vboot for its name
 console.log(vboot.applyBrake());
 console.log(vboot.isMoving()) // checking if vboot is still moving after applying brake
 console.log(car.setColor())
 mercedes.color = "blue"
 mercedes.model ="V50"
console.log(beetle.getModel());
console.log(camry.setSpeed(100));
console.log(camry.getSpeed());


module.exports = {Car, mercedes, toyota, jeep, volkswagen }