class Car {
	static fly = false;

	constructor(brand, wheel, wd_type) {
		this.brand = brand;
		this.wheel = wheel;
		this.wd_type = wd_type;
	}

	brand_name(data) {
		this.brand = data;
		console.log("Car Brand: ",this.brand) ;
	}
	num_of_wheel(data) {
		this.wheel = data;
		console.log("Number of Wheel: ", this.wheel);
	}
	typeof_wd(data) {
		this.wd_type = data;
		console.log("wd_type: ", this.wd_type);
	}
	can_fly() {
		console.log ("Can fly: ", Car.fly);
	}
}

//add static method;
Car.dive = function (thing) {
	console.log("Diving: ", thing);
}

//add prototype instance method;
Car.prototype.shoot = function(arg) {
	console.log(`${this.brand} can shoot: `, arg);
};
//add prototype instance method;
Car.prototype.fuel_type = function (arg) {
	console.log("fuel type:" , arg);
}

// Tesla Brand
const Tesla = new Car();
Tesla.brand_name("Tesla");
Tesla.num_of_wheel(4);
Tesla.typeof_wd(4);
Tesla.can_fly();
Tesla.shoot(true);
Tesla.fuel_type(["Baterry", "Sun"]);
// is this Car class ??
console.log("Car class ??", Tesla instanceof(Car));



// INHERITANCE of Car class (super class)
// 				  Truck class (sub class)
class Truck extends Car {
	constructor(brand, wheel, container, sleep_deck) {
		super(brand, wheel)
		this.container = container;
		this.sleep_deck = sleep_deck;
	}
}







