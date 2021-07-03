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
console.log(result);



