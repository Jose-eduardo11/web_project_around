const cardTemplate = document.querySelector(".grid-template").content;

export default class Card {
  constructor(name, link, handleClickImage, handleLike, handleDelete) {
    this.name = name;
    this.link = link;
    this.handleClickImage = handleClickImage;
    this.handleLike = handleLike;
    this.handleDelete = handleDelete;
  }

  getTemplate() {
    return cardTemplate
      .querySelector(".grid__element-container")
      .cloneNode(true);
  }

  toggleLike() {
    this.cardlikeButton.classList.toggle("like-active");
    this.handleLike(this.data.id, !isLiked).then((updateLikes) => {});
  }
  removeCard() {
    this.htmlCard.remove();
  }

  setEventListener() {
    this.cardlikeButton.addEventListener("click", () => {
      this.toggleLike();
    });
    this.cardDeleteButton.addEventListener("click", () => {
      this.handleDelete();
    });
    this.cardImage.addEventListener("click", () => {
      this.handleClickImage(this.name, this.link, this.name);
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
