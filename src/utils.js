// import { resetValidation } from "./validate.js";
const cardPopup = document.querySelector("#form-cards");
const imagePopup = document.querySelector("#images-card");
const imageTitle = document.querySelector(".popup__image-title");
const imageSrc = document.querySelector(".popup__image-container");
export const initialCards = [
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

export function handleEscPopup(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      openPopup.classList.remove("popup_opened");
    }
  }
}
export function handleClosePopupAdd(evt) {
  cardPopup.classList.remove("popup_opened");
}
export function handleOpenImage(title, link, alt) {
  imagePopup.classList.add("popup_opened");
  imageTitle.textContent = title;
  imageSrc.src = link;
  imageSrc.alt = alt;
}
export function handleCloseImage() {
  imagePopup.classList.remove("popup_opened");
}