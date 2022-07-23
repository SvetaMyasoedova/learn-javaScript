let arr= [];
let value;
function sumInput() {
 while (value = prompt("Введите число")) {
 if (value === '' || isNaN(value)) {
  arr.push(value);
  return alert(arr.length);
  break;
 }
 prompt("Введите число");
 }
  
	
};


sumInput();   