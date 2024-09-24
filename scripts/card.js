import { handleOpenImage } from "./utils.js";

const cardTemplate = document.querySelector(".grid-template").content;
export default class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  getTemplate() {
    return cardTemplate
      .querySelector(".grid__element-container")
      .cloneNode(true);
  }

  toggleLike() {
    this.cardlikeButton.classList.toggle("like-active");
  }
  removeCard() {
    this.htmlCard.remove();
  }
  openModalCard() {
    this.openModalCard(this.name, this.link);
  }
  setEventListener() {
    this.cardlikeButton.addEventListener("click", () => {
      this.toggleLike();
    });
    this.cardDeleteButton.addEventListener("click", () => {
      this.removeCard();
    });
    this.cardImage.addEventListener("click", () => {
      console.log("que se abra el popup");
      handleOpenImage(this.name, this.link, this.name);
    });
  }
  getCard() {
    this.setProperties();
    this.setEventListener();
    return this.htmlCard;
  }
  setProperties() {
    this.htmlCard = this.getTemplate();
    this.cardImage = this.htmlCard.querySelector(".grid__element");
    this.cardTitle = this.htmlCard.querySelector(".grid__element-text");
    this.cardlikeButton = this.htmlCard.querySelector(".grid__button");
    this.cardDeleteButton = this.htmlCard.querySelector(".grid__button-trash");
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
  }
}
