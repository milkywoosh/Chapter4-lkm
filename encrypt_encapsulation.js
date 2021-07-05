class User {
	constructor(props) {
		let { email, password} = props;
		this.email = email;
		this.encryptedPassword = this.#encrypt(password);
		// will not save the plain password
	}


	/*
	
	INI SEBENERNYA NGAPAIN ??????
		
	*/
	#encrypt = (password) => {
		return `encrypted-version-of-${password}`
	}
	// Getter
	#decrypt = () => {
		console.log("this.encryptedPassword: ", this.encryptedPassword.split(`encrypted-version-of-`)[1])
		return this.encryptedPassword.split(`encrypted-version-of-`)[1];
	}
	authenticate(password) {
		console.log("this.#decrypt: ", this.#decrypt())
		return this.#decrypt() === password;
	}

}

let Bot = new User({
		email: "bot@mail.com",
		password: "123456"
	});

	const isAuthenticated = Bot.authenticate("123456");
	console.log(isAuthenticated);

