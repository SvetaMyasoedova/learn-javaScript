const button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let result = document.getElementById("result");

button.addEventListener("click", function (e) {
  result.innerHTML = +input1.value + +input2.value;
});
