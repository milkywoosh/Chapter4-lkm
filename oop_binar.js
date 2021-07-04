class Person {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
	introduce() {
		console.log(`Hi, my name is ${this.name}`)
	}
}
// Create a child class from Person
class Programmer extends Person {
	constructor(name, address, programmingLanguages) {
		super(name, address)
		// Call the super/parent class constructor, in this case Person.constructor;
		this.programmingLanguages = programmingLanguages;
	}

// Overload the Introduce Method
	introduce(withDetail) {
		super.introduce(); // Call the super class introduce instance method.

		console.log(Array.isArray(withDetail))
		// console.log(`I can write ${this.programmingLanguages}`) : console.log("Wrong input")
	}
	code() {
		let x = Math.random();
		let acak = Math.floor(x * this.programmingLanguages.length)
		console.log(`Code some --> ${acak} equal to  ${x} * ${this.programmingLanguages.length} = ${x * this.programmingLanguages.length}: `, this.programmingLanguages[acak])
	}
}

let Isyana = new Programmer("Isyana Karina", "Jakarta", ["JavaScript", " Kotlin", "C", "Java"]);
Isyana.introduce(["JavaScript"])
// Hi, my name is Isyana; I can write ...
//Isyana.introduce("JavaScript") // Hi, my name is Isyana; Wrong Input
//Isyana.introduce(1) // Hi, my name is Isyana; Wrong Input
Isyana.code() //Code some ...