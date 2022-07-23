//Тасование Фишера — Йетса

let arr = [1, 2, 3];
function shuffle(arr) {
	
		for (let i = arr.length - 1; i > 0; i--) {
		  let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
	 
		  // поменять элементы местами
		  // мы используем для этого синтаксис "деструктурирующее присваивание"
		
		  [arr[i], arr[j]] = [arr[j], arr[i]];
		}
	 return arr;
};

console.log(shuffle(arr));

console.log(shuffle(arr));

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));