const strArr = ['Javascript', 'Java', 'C'];


function cekLength(arg, callback) {
	let storeArr = [];
	let i;
	for (i=0; i<arg.length; i++) {
		storeArr.push(callback(arg[i]));
	}
	return storeArr;
}

let result = cekLength(strArr, (item) => {return item.length});
// console.log(result);

let obj = {
	name: "john",
	age: 12,
}

let strfy = JSON.stringify(obj);
// console.log(strfy);

// console.log(obj.toString());


/* note : spreading operator in argument
	dapat digunakan saat ingin menggunakan banyak argument
*/





// argument khusus PLAYER 1: gunting , batu, kertas
// PLAYER 2 random
function game(player1) {
	let pool = ["gunting", "batu", "kertas"];
	let rand =  Math.floor(Math.random() * pool.length);
	console.log("player1: ", player1, " vs com: ", pool[rand]);
	if (player1 == "gunting") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "kertas") {
			return "player 1 win"
		} else if (pool[rand] == "batu") {
			return "com win"
		}
	} else if (player1 == "batu") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "kertas") {
			return "com win"
		} else if (pool[rand] == "gunting") {
			return "player 1 win"
		}
	} else if (player1 == "kertas") {
		if (pool[rand] == player1) {
			return "draw";
		} else if (pool[rand] == "gunting") {
			return "com win"
		} else if (pool[rand] == "batu") {
			return "player 1 win"
		}
	}
}

// console.log(game("batu"));


function suit(player) {

	let pool = ["gunting", "batu", "kertas"];
	let rand = Math.floor(Math.random() * pool.length);
    // kalo sama, draw
    console.log("player1: ", player, " vs com: ", pool[rand]);
    if (player === pool[rand]) return "draw"

    // kalo beda, ...
    else if (player === "gunting") {
        return pool[rand] === "kertas" ? "player 1": "comp"  ;
    } else if (player === "batu") {
    	return pool[rand] === "kertas" ? "comp" : "player 1";
    } else if (player === "kertas") {
    	return pool[rand] === "batu" ? "player 1" : "comp";
    }
   
}

// console.log(suit("gunting"))

var plusOne = function(digits) {
    	for(let i = digits.length - 1; i >= 0; i--){
	        if(digits[i]<9){
                digits[i]++;
                return digits;
			} else {
				digits[i]=0;
	     	}
	    } 	
	digits.unshift(1);
    return digits;
};
    console.log(plusOne([4,3,2,1]));








