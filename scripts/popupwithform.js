import popup from "./popup.js";
export default class popupwithform extends popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleFormSubmit;
    this._form = this.popupElement.querySelector(".popup__form");
  }
  getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__input");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  SetEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
    this.popupElement.addEventListener("click", (evt) => {
      if (this.handleclickOutside(evt)) {
        console.log("click por fuera");
        this.close();
      }
    });
  }
}
