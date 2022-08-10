let button = document.querySelector(".input");

button.addEventListener("click", function (e) {
  button.value = "you can't click on me now";
  button.setAttribute("disabled", "disabled");
});
