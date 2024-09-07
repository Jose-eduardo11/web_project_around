const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasValidInputs = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasValidInputs(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  console.log("inputList--", inputList);

  const submitButton = formElement.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, submitButton, settings.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton, settings.inactiveButtonClass);
    });
  });
};
function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  console.log("formlist---", formList);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__send",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

export const resetValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  console.log("formlist---", formList);
  formList.forEach((formElement) => {
    formElement.reset();
    const submitButton = formElement.querySelector(
      settings.submitButtonSelector
    );

    const inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    toggleButtonState(inputList, submitButton, settings.inactiveButtonClass);
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement);
    });
  });
};
