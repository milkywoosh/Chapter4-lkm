
// PROTECTED ENCAPSULATION
class Human {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
	// "_" is naming convention for protected method

	_call() {
		console.log(`call me as a ${this.name}`);
	}
	// ENCAPSULATION
	// this method is PUBLIC method, so it is accessible
	static isEating(arg) {
		let foods = ["plant", "animal"];

		// .includes() method will check if arg is exist in foods array
		return foods.includes(arg.toLowerCase());
	}
}

class Programmer extends Human {
	constructor(name, address, task, salary) {
		super(name, address);
		this.task = task;
		this.salary = salary;
	}
	doCall() {
		super._call();
	}
}

let sb = new Human("Sabrina", "Jakarta");
let job = new Programmer("Developer", "$1000");

/*Meskipun pemanggilan "sb._call() " gak error ketika kita panggil protected secara public. Tapi,
kita harus paham method ini protected, 
--> yang semestinya hanya boleh
dipanggil di dalam class declaration atau sub-classnya.
*/

/*pertanyaan:  kok bisa protected method dipanggil secara publik???
			   lantas kalopun nanti protected method dipanggil scr publik, apa akibatnya???
*/
console.log(sb._call());
console.log(job.doCall());