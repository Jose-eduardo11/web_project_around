const cardTemplate = document.querySelector(".grid-template").content;
export default class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  getTemplate() {
    console.log(cardTemplate);
    return cardTemplate.querySelector(".grid__element-container").cloneNode;
  }
  setProperties() {
    this.htmlCard = this.getTemplate();
    console.log(this.htmlCard);
    this.cardImage = this.htmlCard.querySelector(".grid__element");
    this.cardTitle = this.htmlCard.querySelector(".grid__element-text");
    this.cardlikeButton = this.htmlCard.querySelector(".grid__button");
    this.cardDeleteButton = this.htmlCard.querySelector(".grid__button-trash");
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
  }

  toggleLike() {
    this.cardlikeButton.classList.toggle(".like-active");
  }
  setEventListener() {
    this.cardlikeButton.addEventListener("click", function () {
      this.toggleLike();
    });
  }
  setCard() {
    this.setProperties();
    this.setEventListener();
    return this.htmlCard;
  }
}
