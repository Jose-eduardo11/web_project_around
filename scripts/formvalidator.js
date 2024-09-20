export default class FormValidator {
  constructor(formElement, settings) {
    (this.formElement = formElement), (this.settings = settings);
  }
  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `-${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textcontent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = "";
    errorElement.classList.remove("form__input-error_active");
  }

  checkInputValidity() {
    if (!InputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    }
  }
  toggleButtonState() {}

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.inputList.forEach((InputElement) => {
      InputElement.addEventListener("input", function () {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
