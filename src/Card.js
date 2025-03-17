const cardTemplate = document.querySelector(".grid-template").content;

export default class Card {
  constructor(
    name,
    link,
    isLike,
    id,
    handleClickImage,
    deleteLike,
    handleConfirm,
    handleLike
  ) {
    this.name = name;
    this.link = link;
    this.isLiked = isLike;
    this.id = id;
    this.handleClickImage = handleClickImage;
    this.deleteLike = deleteLike;
    this.handleConfirm = handleConfirm;
    this.handleLike = handleLike;
    this.removeCard = this.removeCard.bind(this);
  }

  removeLike() {
    console.log(this.isLiked);
    this.isLiked = false;
    if (this.isLiked) {
      this.deleteLike();
      this.isLiked = false;
    } else {
      console.log(this.handleLike);
      this.handleLike();
      this.isLiked = true;
    }
  }

  getTemplate() {
    return cardTemplate
      .querySelector(".grid__element-container")
      .cloneNode(true);
  }

  toggleLike() {
    this.cardlikeButton.classList.toggle("like-active");
    this.removeLike();
    console.log(this.name, "name", this.id, "id");
  }
  removeCard() {
    this.htmlCard.remove();
  }

  setEventListener() {
    this.cardlikeButton.addEventListener("click", () => {
      this.toggleLike();
    });
    this.cardDeleteButton.addEventListener("click", () => {
      this.handleConfirm(this.id, this.removeCard);
      console.log(this.id, this.removeCard);
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
    if (this.isLiked) {
      console.log(this.isLiked);
      this.cardlikeButton.classList.add("like-active");
    } else {
      this.cardlikeButton.classList.remove("like-active");
    }
  }
}
