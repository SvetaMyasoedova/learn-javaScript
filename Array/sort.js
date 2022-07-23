let arr = [5, 2, 1, -10, 8];
arr.sort( (a, b) => b - a );
console.log(arr); //[ 8, 5, 2, 1, -10 ]

let arr2 = [5, 2, 1, -10, 8];
arr2.sort( (a, b) => a - b );
console.log(arr2); //[ -10, 1, 2, 5, 8 ]
