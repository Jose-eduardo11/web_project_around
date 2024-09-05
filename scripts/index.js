// Variables
const profilePopupButton = document.querySelector(".data__edit");
const profilePopupAdd = document.querySelector(".profile__add");
const profilebuttonClose = document.querySelectorAll(".popup__close");
const profilePopup = document.querySelector("#form-profile");
const imagePopup = document.querySelector("#images-card");
const cardPopup = document.querySelector("#form-cards");
const imageSrc = document.querySelector(".popup__image-container");
const imageTitle = document.querySelector(".popup__image-title");
const cardTemplate = document.querySelector(".grid-template").content;
const cardContent = document.querySelector(".grid");
const cardAddSubmit = document.querySelector(".form__send-card");
const nameInput = document.querySelector(".popup__input");
const jobInput = document.querySelector(".form__about-me");
const profileButton = document.querySelector("#edit-submit");
const cardButton = document.querySelector("#card-submit");
const nameInputCard = document.querySelector(".form__title");
const jobInputCard = document.querySelector(".form__url");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    alt: "Valle de Yosemite",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    alt: "Lago Louisese",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    alt: "Montañas Calvas",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    alt: " Parque Nacional de la Vanoise",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    alt: "Lago di Braies",
  },
];

profilePopupButton.addEventListener("click", function () {
  profilePopup.classList.add("popup_opened");
});
function handleClosePopup() {
  profilePopup.classList.remove("popup_opened");
}
profilebuttonClose[0].addEventListener("click", handleClosePopup);

profilePopupAdd.addEventListener("click", function () {
  cardPopup.classList.add("popup-agregar");
});

function handleClosePopupAdd() {
  cardPopup.classList.remove("popup-agregar");
}

profilebuttonClose[1].addEventListener("click", handleClosePopupAdd);

function handleOpenImage(title, link, alt) {
  imagePopup.classList.add("popup_opened");
  imageTitle.textContent = title;
  imageSrc.src = link;
  imageTitle.alt = alt;
}
function handleCloseImage() {
  imagePopup.classList.remove("popup_opened");
}
profilebuttonClose[2].addEventListener("click", handleCloseImage);

const formElement = document.querySelector(".popup__form");

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".popup__input");
  const jobInput = document.querySelector(".form__about-me");
  const profilename = document.querySelector(".data__name");
  const profilejob = document.querySelector(".data__job");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profilename.textContent = nameValue;
  profilejob.textContent = jobValue;
  handleClosePopup();
});

function saveData() {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  if (nameValue != "" && jobValue != "") {
    profileButton.classList.add("form__send_active");
  } else {
    profileButton.classList.remove("form__send_active");
  }
}

nameInput.addEventListener("input", saveData);
jobInput.addEventListener("input", saveData);

function saveDataCard() {
  const nameValue = nameInputCard.value;
  const jobValue = jobInputCard.value;

  if (nameValue != "" && jobValue != "") {
    cardButton.classList.add("form__send_active");
  } else {
    cardButton.classList.remove("form__send_active");
  }
}

nameInputCard.addEventListener("input", saveDataCard);
jobInputCard.addEventListener("input", saveDataCard);

function createCard(name, link, alt) {
  const card = cardTemplate
    .querySelector(".grid__element-container")
    .cloneNode(true);
  const cardImage = card.querySelector(".grid__element");
  const cardTitle = card.querySelector(".grid__element-text");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const likeButton = card.querySelector(".grid__button");
  const likeImage = card.querySelector(".like");
  cardImage.addEventListener("click", function () {
    handleOpenImage(name, link, alt);
  });
  function removeButtonUnlike() {
    likeImage.classList.remove("grid__button");
  }

  likeButton.addEventListener("click", function () {
    likeImage.classList.add("like-active");
    removeButtonUnlike();
  });
  const removebutton = card.querySelector(".grid__button-trash");

  removebutton.addEventListener("click", function () {
    card.remove();
  });

  cardContent.prepend(card);
}

initialCards.forEach(function (item) {
  createCard(item.name, item.link, item.alt);
});

cardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector(".form__title");
  const cardUrlInput = document.querySelector(".form__url");
  const titleValue = cardTitleInput.value;
  const imageValue = cardUrlInput.value;
  const cardAlt = cardTitleInput.value;

  createCard(titleValue, imageValue, cardAlt);
  handleClosePopupAdd();
});
