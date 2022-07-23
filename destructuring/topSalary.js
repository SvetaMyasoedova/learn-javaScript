let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
 };

 function topSalary(salaries) {
	let result = Object.values(salaries);
	if (salaries.length == 0) return null
	return Math.max.apply(null, result);
 }
 console.log(topSalary(salaries));