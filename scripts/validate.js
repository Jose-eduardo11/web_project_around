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
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  console.log("inputList--", inputList);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
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

// const formularioPerfil = document.getElementById("register-profile");
// const formularioCartas = document.getElementById("register-cards");
// const guardarFormularios = document.querySelectorAll("form__send");
// const inputsPerfil = formularioPerfil.querySelector("form");
// const inputsCards = formularioCartas.querySelector("form");

// const validarFormulario = (evt) => {
//   console.log(evt.target.name);
// };

// inputsPerfil.forEach((input) => {
//   input.addEventListener("keyup", validarFormulario);
// });

// inputsCards.forEach((input) => {
//   input.addEventListener("keyup", validarFormulario);
// });
