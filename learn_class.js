class Car {
	static fly = false;

	constructor(brand = null, wheel, wd_type) {
		this.brand = brand;
		this.wheel = wheel;
		this.wd_type = wd_type;
	}

	brand_name() {
		console.log("Car Brand: ",this.brand) ;
	}
	num_of_wheel() {
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

const Tesla = new Car("Tesla", 4);
Tesla.brand_name();
Tesla.num_of_wheel();
Tesla.typeof_wd(4);
Tesla.can_fly();
Tesla.shoot(true);
Tesla.fuel_type(["Baterry", "Sun"]);
// is this Car class ??
console.log("Car class ??", Tesla instanceof(Car));
console.log("\n")



// INHERITANCE of Car class (super class)
// 				  Truck class (sub class)
class Truck extends Car {
	constructor(brand, wheel, container, sleep_deck) {
		super(brand, wheel);
		this.container = container;
		this.sleep_deck = sleep_deck;
	}
	brand_name() {
		super.brand_name();
		// this.brand = data;;
	}
	num_of_wheel() {
		super.num_of_wheel();
	}
	fuel_type(data) {
		super.fuel_type(data);
	}

	have_container(data) {
		this.container = data;
		console.log("container: ", this.container);
	}
	have_sleep_deck(data) {
		this.sleep_deck = data;
		console.log("sleep_deck: ", this.sleep_deck);
	}
}

const Hinno = new Truck("Hinno", 9);
Hinno.brand_name();
Hinno.num_of_wheel();
Hinno.fuel_type("Solar");
Hinno.have_container(true);
Hinno.have_sleep_deck(false);
console.log("Truck Class: ", Hinno instanceof(Truck));







