// import { resetValidation } from "./validate.js";
import Card from "./card.js";
import FormValidator from "./formvalidator.js";
import {
  initialCards,
  handleEscPopup,
  handleClosePopupAdd,
  handleOpenImage,
  handleCloseImage,
} from "./utils.js";
const profilePopupButton = document.querySelector(".data__edit");
const profilePopupAdd = document.querySelector(".profile__add");
const displayWindow = document.querySelectorAll(".popup");
const profilebuttonClose = document.querySelectorAll(".popup__close");
const profilePopup = document.querySelector("#form-profile");
const cardPopup = document.querySelector("#form-cards");
const cardTemplate = document.querySelector(".grid-template").content;
const cardContent = document.querySelector(".grid");
// const cardAddSubmit = document.querySelector(".form__send-card");
// const nameInput = document.querySelector(".popup__input");
// const jobInput = document.querySelector(".form__about-me");
// const profileButton = document.querySelector("#edit-submit");
// const cardButton = document.querySelector("#card-submit");
// const nameInputCard = document.querySelector(".form__title");
// const jobInputCard = document.querySelector(".form__url");

document.addEventListener("keydown", handleEscPopup);
profilePopupButton.addEventListener("click", function () {
  profilePopup.classList.add("popup_opened");
});
function handleClosePopup(evt) {
  profilePopup.classList.remove("popup_opened");
  validationProfile.resetValidation();
}
profilebuttonClose[0].addEventListener("click", handleClosePopup);

profilePopupAdd.addEventListener("click", function () {
  cardPopup.classList.add("popup_opened");
});

profilebuttonClose[1].addEventListener("click", handleClosePopupAdd);

profilebuttonClose[2].addEventListener("click", handleCloseImage);

const formElement = document.querySelector(".popup__form");

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".popup__input");
  const jobInput = document.querySelector(".form__about-me");
  const profilename = document.querySelector(".data__name");
  const profilejob = document.querySelector(".data__job");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profilename.textContent = nameValue;
  profilejob.textContent = jobValue;
  handleClosePopup();
});

function createCard(name, link, alt) {
  const card = cardTemplate
    .querySelector(".grid__element-container")
    .cloneNode(true);
  const cardImage = card.querySelector(".grid__element");
  const cardTitle = card.querySelector(".grid__element-text");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const likeButton = card.querySelector(".grid__button");
  const likeImage = card.querySelector(".like");
  cardImage.addEventListener("click", function () {
    handleOpenImage(name, link, alt);
  });
  function removeButtonUnlike() {
    likeImage.classList.remove("grid__button");
  }

  likeButton.addEventListener("click", function () {
    likeImage.classList.add("like-active");
    removeButtonUnlike();
  });
  const removebutton = card.querySelector(".grid__button-trash");

  removebutton.addEventListener("click", function () {
    card.remove();
  });

  cardContent.prepend(card);
}

initialCards.forEach(function (item) {
  const newCard = new Card(item.name, item.link);
  newCard.getCard();
  cardContent.prepend(newCard.htmlCard);
});

cardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector(".form__title");
  const cardUrlInput = document.querySelector(".form__url");
  const titleValue = cardTitleInput.value;
  const imageValue = cardUrlInput.value;
  const cardAlt = cardTitleInput.value;

  createCard(titleValue, imageValue, cardAlt);
  cardTitleInput.value = "";
  cardUrlInput.value = "";

  handleClosePopupAdd();
});
displayWindow.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});

const instanceCard = new Card(name, link);

instanceCard.getCard();
cardContent.prepend(instanceCard.htmlCard);
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__send",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validationProfile = new FormValidator(profilePopup, settings);
const validationProfileCard = new FormValidator(cardPopup, settings);
validationProfile.enableValidation();
validationProfileCard.enableValidation();
