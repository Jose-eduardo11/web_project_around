const profilepopupbutton = document.querySelector(".data__edit");
const profilebuttonClose = document.querySelector(".popup__close");
const profilepopup = document.querySelector(".popup");

function handleOpenPopup() {
  profilepopup.classList.add("popup_opened");
}

function handleClosePopup() {
  profilepopup.classList.remove("popup_opened");
}
profilepopupbutton.addEventListener("click", handleOpenPopup);
profilebuttonClose.addEventListener("click", handleClosePopup);

const formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".form__name");
  const jobInput = document.querySelector(".form__about-me");
  const profilename = document.querySelector(".data__name");
  const profilejob = document.querySelector(".data__job");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profilename.innerHTML = nameValue;
  profilejob.innerHTML = jobValue;
  handleClosePopup();
}
formElement.addEventListener("submit", handleProfileFormSubmit);

const nameInput = document.querySelector(".form__name");
const jobInput = document.querySelector(".form__about-me");
const submitactive = document.querySelector(".form__send");

function saveData() {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  if (nameValue != "" && jobValue != "") {
    submitactive.classList.add("form__send_active");
  } else {
    submitactive.classList.remove("form__send_active");
  }
}
nameInput.addEventListener("input", saveData);
jobInput.addEventListener("input", saveData);
