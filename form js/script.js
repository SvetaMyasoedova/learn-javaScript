//add a new option to the select
const selectedOption = color.options[color.selectedIndex]; //<option selected value="yellow">Yellow</option>
const newOption = new Option("White", "white");
color.append(newOption);
newOption.selected = true;

//focus/blur/change/paste for input

const mainForm = document.forms.main;
const mainFormInputName = mainForm.username;
const mainFormInputNamePlaceholder = mainFormInputName.placeholder;

mainFormInputName.addEventListener("change", function (e) {
  console.log("the change worked!");
});

mainFormInputName.addEventListener("paste", function (event) {
  console.log("you can't paste text, sorry");
  event.preventDefault();
});

mainFormInputName.addEventListener("focus", function (e) {
  mainFormInputName.placeholder = "";
});

mainFormInputName.addEventListener("blur", function (e) {
  mainFormInputName.placeholder = mainFormInputNamePlaceholder;
});

//show image after file selection
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
  let selectedFile = mainFormFile.files[0];

  let fileUrl = URL.createObjectURL(selectedFile); //get image url

  mainFormFile.parentElement.insertAdjacentHTML(
    "beforeend",

    `<div class="main-form__image"> 
		<img alt="" title = "${selectedFile.name}"  src = "${fileUrl}"> 
		
		</div>`
  );
});
