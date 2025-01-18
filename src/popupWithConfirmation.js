import Popup from "./Popup";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super();
    this.popupSelector = document.querySelector(popupSelector);
    this.handleConfirm = handleConfirm;
    this._form = document.querySelector(".form__send");
  }
  open() {
    console.log(this.popupSelector);
    this.popupSelector.classList.add("popup_opened");
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("click", () => {
      console.log("click");
      this._handleConfirm();
    });
  }
}
