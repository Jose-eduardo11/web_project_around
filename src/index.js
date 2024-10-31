import "./pages/index.css";
import popupwithImage from "./popupwithimage.js";
import popupwithform from "./popupwithform.js";
import Card from "./card.js";
import FormValidator from "./formvalidator.js";
import { initialCards, handleClosePopupAdd } from "./utils.js";
import { Section } from "./section.js";
import { UserInfo } from "./userinfo.js";

const profilePopupButton = document.querySelector(".data__edit");
const profilePopupAdd = document.querySelector(".profile__add");
const profilePopup = document.querySelector("#form-profile");
const cardPopup = document.querySelector("#form-cards");

const popupProfile = new popupwithform("#form-profile");
const popupCard = new popupwithform("#form-cards");
const popupImage = new popupwithImage("#images-card");

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupCard.setEventListeners();
profilePopupButton.addEventListener("click", () => {
  popupProfile.open();
});

profilePopupAdd.addEventListener("click", () => {
  popupCard.open();
});

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
  popupProfile.close();
});

new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item.name, item.link, () => {
        popupImage.open(item.name, item.link);
      });
      return newCard.getCard();
    },
  },
  ".grid"
).renderItems();

cardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector(".form__title");
  const cardUrlInput = document.querySelector(".form__url");
  const titleValue = cardTitleInput.value;
  const imageValue = cardUrlInput.value;
  const cardAlt = cardTitleInput.value;

  const card = new Card(titleValue, imageValue, () => {}).getCard();
  const cardContainer = document.querySelector(".grid");
  cardContainer.prepend(card);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
  handleClosePopupAdd();
});

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
