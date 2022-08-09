const button = document.querySelector(".button");
const input = document.querySelector(".input");
const txtItem = document.querySelector(".textarea__item");
const txtItemLimit = txtItem.getAttribute("maxlength");
const txtCounter = document.querySelector(".textarea__counter span");
txtCounter.innerHTML = txtItemLimit;

// add textarea on button click and hide textarea on click outside textarea
const toggleTxt = function () {
  input.classList.toggle("open");
};
const removeTxt = function () {
  input.classList.remove("open");
};

document.addEventListener("click", function (e) {
  const target = e.target;

  target === button
    ? toggleTxt()
    : !target.closest(".input")
    ? removeTxt()
    : false;
});

//add symbols counter
txtItem.addEventListener("input", txtSetCounter);

function txtSetCounter() {
  const txtCounterResult = txtItemLimit - txtItem.value.length;
  txtCounter.innerHTML = txtCounterResult;
}

//hide textarea using keydown

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    input.style.display = "none";
  }
});
