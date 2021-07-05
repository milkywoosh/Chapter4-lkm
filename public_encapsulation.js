
// PUBLIC ENCAPSULATION
class Human {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
	introduce() {
		console.log(`Hello my name is ${this.name}`);
	}
	// ENCAPSULATION
	// this method is PUBLIC method, so it is accessible
	static isEating(arg) {
		let foods = ["plant", "animal"];

		// .includes() method will check if arg is exist in foods array
		return foods.includes(arg.toLowerCase());
	}
}

let mj = new Human("Michael Jack", "Isekai");
console.log(mj);
console.log(mj.introduce());
console.log(Human.isEating("Plant"));
