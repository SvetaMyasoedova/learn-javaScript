//the content of the input is displayed through an alert

const button = document.querySelector(".button")
let input = document.getElementById("input");

button.addEventListener("click", function (e) {
  alert(input.value);
});
