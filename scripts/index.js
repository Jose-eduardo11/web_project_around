import { resetValidation } from "./validate.js";
import Card from "./card.js";
// Variables
const profilePopupButton = document.querySelector(".data__edit");
const profilePopupAdd = document.querySelector(".profile__add");
const displayWindow = document.querySelectorAll(".popup");
const profilebuttonClose = document.querySelectorAll(".popup__close");
const profilePopup = document.querySelector("#form-profile");
const imagePopup = document.querySelector("#images-card");
const cardPopup = document.querySelector("#form-cards");
const imageSrc = document.querySelector(".popup__image-container");
const imageTitle = document.querySelector(".popup__image-title");
const cardTemplate = document.querySelector(".grid-template").content;
const cardContent = document.querySelector(".grid");
const cardAddSubmit = document.querySelector(".form__send-card");
const nameInput = document.querySelector(".popup__input");
const jobInput = document.querySelector(".form__about-me");
const profileButton = document.querySelector("#edit-submit");
const cardButton = document.querySelector("#card-submit");
const nameInputCard = document.querySelector(".form__title");
const jobInputCard = document.querySelector(".form__url");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    alt: "Valle de Yosemite",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    alt: "Lago Louisese",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    alt: "Montañas Calvas",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    alt: " Parque Nacional de la Vanoise",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    alt: "Lago di Braies",
  },
];
function handleEscPopup(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      openPopup.classList.remove("popup_opened");
    }
  }
}
document.addEventListener("keydown", handleEscPopup);
profilePopupButton.addEventListener("click", function () {
  profilePopup.classList.add("popup_opened");
});
function handleClosePopup(evt) {
  profilePopup.classList.remove("popup_opened");
  resetValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".form__send",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
}
profilebuttonClose[0].addEventListener("click", handleClosePopup);

profilePopupAdd.addEventListener("click", function () {
  cardPopup.classList.add("popup_opened");
});

function handleClosePopupAdd(evt) {
  cardPopup.classList.remove("popup_opened");
  resetValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".form__send",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
}

profilebuttonClose[1].addEventListener("click", handleClosePopupAdd);

function handleOpenImage(title, link, alt) {
  imagePopup.classList.add("popup_opened");
  imageTitle.textContent = title;
  imageSrc.src = link;
  imageSrc.alt = alt;
}
function handleCloseImage() {
  imagePopup.classList.remove("popup_opened");
}
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
  createCard(item.name, item.link, item.alt);
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
    console.log(evt.target);
    if (evt.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});

const instanceCard = new Card(
  "instancia1",
  "https://dam.ngenespanol.com/wp-content/uploads/2020/12/nutrias-tienen-piedra-favorita.jpg"
);
// instanceCard.setProperties();
instanceCard.setCard();
console.log(instanceCard);
cardContent.prepend(instanceCard.htmlCard);
