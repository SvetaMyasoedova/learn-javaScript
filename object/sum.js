let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
 }
 let sum = 0;
 console.log("Init sum: " + sum)
 for (let key in salaries) {
	sum += salaries[key];
	console.log(`Iterate for ${key}, his salary is: ${salaries[key]}, sum is: ${sum}`) 
 }
 console.log(`The whole sum is: ${sum}`)