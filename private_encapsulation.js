
// PRIVATE ENCAPSULATION
class Human {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
	
	// ENCAPSULATION
	// private method
	#doGossip = () => {
		console.log(`My address will become viral ${this.address}`)
	}
	talk() {
		console.log(this.#doGossip());
	}

	// private property
	static #isHidingArea = true;
	static math_skill = true;

}

let mj = new Human("Michael Jack", "Isekai");
console.log(mj.talk());
console.log("math skill: ", Human.math_skill);

/* this following code WONT work
	because #doGossip has "#" mark as private method !
*/
try {
	Human.#isHidingArea;
	mj.#doGossip();
} catch(err) {
	console.error(err);
}
