import Popup from "./Popup";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this.handleConfirm = handleConfirm;
    this._form = document.querySelector(".form__send");
  }
  open(cardId, removeCard) {
    this.cardId = cardId;
    this.removeCard = removeCard;
    console.log(this.cardId);
    console.log(this.popupSelector);
    this.popupElement.classList.add("popup_opened");
  }
  setEventListeners() {
    super.setEventListeners();
    const button2 = document.querySelector("#button-confirm");
    button2.addEventListener("click", () => {
      this.handleConfirm(this.cardId);
      super.close();
    });
  }
}
