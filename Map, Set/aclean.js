function aclean(arr) {
	let map = new Map();
 
	for (let word of arr) {
	
		let sorted = word// PAN
		.toLowerCase() // pan
		.split("") // ["p","a","n"]
		.sort() // ["a","n","p"]
		.join(""); // anp
	  map.set(sorted, word);
	}
 
	return Array.from(map.values());
 }
 
 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 



console.log( aclean(arr) ); 