const button = document.querySelector(".button");
let input = document.getElementById("input");

button.addEventListener("click", function (e) {
  input.value = "I told you!";
});
