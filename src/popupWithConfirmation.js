import Popup from "./Popup";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super();
    this.popupSelector = document.querySelector(popupSelector);
    this.handleConfirm = handleConfirm;
    this._form = document.querySelector(".form__send");
  }
  open(cardId) {
    this.cardId = cardId;
    console.log(this.cardId);
    console.log(this.popupSelector);
    this.popupSelector.classList.add("popup_opened");
  }
  setEventListeners() {
    super.setEventListeners();
    const button2 = document.querySelector("#button-confirm");
    button2.addEventListener("click", () => {
      this.handleConfirm(this.cardId);
    });
  }
}
