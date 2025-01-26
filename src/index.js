import "./pages/index.css";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { Section } from "./Section.js";
import Api from "./Api.js";
import UserInfo from "./Userinfo.js";
import PopupWithConfirmation from "./popupWithConfirmation.js";
const buttonAvatar = document.querySelector("#avatar-submit");
const api = new Api("https://around-api.es.tripleten-services.com/v1", {
  authorization: "d374ffa3-938c-44a3-a4fd-2525d2b4c6e4",
  "Content-Type": "application/json",
});
const profilePopupButton = document.querySelector(".data__edit");
const profilePopupAvatar = document.querySelector(".profile__avatar");
const profilePopupAdd = document.querySelector(".profile__add");
const profilePopup = document.querySelector("#form-profile");
const cardPopup = document.querySelector("#form-cards");

const popupImage = new PopupWithImage("#images-card");

const popupDelete = new PopupWithConfirmation("#form-delete", (cardId) => {
  console.log(cardId);
  api
    .deleteCard(cardId)
    .then(() => {
      popupElement.removeCard();
    })
    .catch((err) => {
      console.log(`Error al eliminar la tarjeta: ${err}`);
    });
});

//----------------

const user = new UserInfo(".data__name", ".data__job", ".profile__avatar");
let cardContainer;
api
  .getInitialUser()
  .then((data) => {
    user.setUserInfo(data.name, data.about, data.avatar);
  })
  .catch((error) => {
    console.log(`Error: ${error.status}`);
  });
api.getInitialCards().then((data) => {
  cardContainer = new Section(
    {
      items: data,
      renderer: (item) => {
        const newCard = new Card(
          item.name,
          item.link,
          item.isLiked,
          item._id,

          popupImage.open(item.name, item.link),

          api.deleteLike(item._id),

          (cardId) => {
            console.log(cardId);
            popupDelete.open(cardId);
          }
        );
        return newCard.getCard();
      },
    },
    ".grid"
  );
  cardContainer.renderItems();
});
const popupProfile = new PopupWithForm("#form-profile", (inputValues) => {
  console.log(inputValues);
  api.editProfile(inputValues.name, inputValues.about).then((data) => {
    user.setUserInfo(data.name, data.about, data.avatar);
  });
});
const popupAvatar = new PopupWithForm("#form-avatar", (inputValues) => {
  buttonAvatar.textContent = "Cargando...";
  api.editAvatar(inputValues.link).then((data) => {
    buttonAvatar.textContent = "Guardar";
    user.setUserInfo(data.name, data.about, data.avatar);
  });
});

const popupCard = new PopupWithForm("#form-cards", (inputValues) => {
  api.createCard(inputValues.title, inputValues.link).then((data) => {
    const card = new Card(
      data.name,
      data.link,
      data.isLiked,
      data._id,

      popupImage.open(data.name, data.link, data.name),
      api.deleteLike(data._id),
      popupDelete.open(data.name, data.link, data.name)
    ).getCard();
    cardContainer.prependItem(card);
  });
});

popupDelete.setEventListeners();
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAvatar.setEventListeners();
popupCard.setEventListeners();
profilePopupButton.addEventListener("click", () => {
  popupProfile.open();
});
profilePopupAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

profilePopupAdd.addEventListener("click", () => {
  popupCard.open();
});

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__send",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validationProfile = new FormValidator(profilePopup, settings);
const validationProfileCard = new FormValidator(cardPopup, settings);
validationProfile.enableValidation();
validationProfileCard.enableValidation();
