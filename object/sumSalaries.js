let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let sum = 0;

function sumSalaries(salaries) {
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

console.log(sumSalaries(salaries)); // 650
