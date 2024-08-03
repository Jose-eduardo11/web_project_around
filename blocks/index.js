let profilepopupbutton = document.querySelector(".data__edit");
let profilebuttonClose = document.querySelector(".popup__close");
let profilepopup = document.querySelector(".popup");

function handleopenpopup() {
  console.log("test");
  profilepopup.classList.add("popup_opened");
}

function handleclosepopup() {
  profilepopup.classList.remove("popup_opened");
}
profilepopupbutton.addEventListener("click", handleopenpopup);
profilebuttonClose.addEventListener("click", handleclosepopup);

let formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".form__name");
  let jobInput = document.querySelector(".form__about-me");
  let profilename = document.querySelector(".data__name");
  let profilejob = document.querySelector(".data__job");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profilename.innerHTML = nameValue;
  profilejob.innerHTML = jobValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);

let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__about-me");
let submitactive = document.querySelector(".form__send");

function savedata() {
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  if (nameValue != "" && jobValue != "") {
    submitactive.classList.add("form__send_active");
  } else {
    submitactive.classList.remove("form__send_active");
  }
}
nameInput.addEventListener("input", savedata);
jobInput.addEventListener("input", savedata);
