import popup from "./popup.js";
export default class popupwithImage extends popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageElement = this.popupElement.querySelector(
      ".popup__image-container"
    );
    this.titleElement = this.popupElement.querySelector(".popup__image-title");
  }
  open(name, link) {
    super.open();
    this.titleElement.textContent = name;
    this.imageElement.src = link;
  }
}

// section, card y popupwithimage bien
