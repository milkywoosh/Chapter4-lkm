class Car {
	// static property, 
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

const Tesla = new Car("Tesla", 4, "Solar Sun");
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
	constructor(brand, wheel, wd_type, container, sleep_deck) {
		super(brand, wheel, wd_type);
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
	typeof_wd(data) {
		super.typeof_wd(data);
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
Hinno.typeof_wd(6);
Hinno.fuel_type("Solar");
Hinno.have_container(true);
Hinno.have_sleep_deck(false);
console.log("Truck Class: ", Hinno instanceof(Truck));
console.log("\n");



class Taxi extends Car {
	constructor(brand, wheel, wd_type, rent, num_passanger) {
		super(brand, wheel, wd_type);
		this.rent = rent;
		this.num_passanger = num_passanger;
	}
	brand_name() {
		super.brand_name();
	}
	num_of_wheel() {
		super.num_of_wheel();
	}
	typeof_wd(data) {
		super.typeof_wd(data);
	}
	rent_car(data) {
		this.rent = data;
		console.log("can rent: ", this.rent);
	}
	possible_passanger(data) {
		this.num_passanger = data;
		console.log("How many passanger: ", this.num_passanger);
	}

}

const blue_bird = new Taxi("Blue Bird", 4);

blue_bird.brand_name();
blue_bird.num_of_wheel();
blue_bird.typeof_wd(4);
blue_bird.rent_car(true);
blue_bird.possible_passanger(3);
blue_bird.fuel_type("Pertalite");







