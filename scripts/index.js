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

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Funciones y llamado de los botones de abrir y cerrar

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

function handleOpenImage(title, link) {
  imagePopup.classList.add("popup_opened");
  imageTitle.textContent = title;
  imageSrc.src = link;
}
function handleCloseImage() {
  imagePopup.classList.remove("popup_opened");
}
profilebuttonClose[2].addEventListener("click", handleCloseImage);
// Funcion para manejar el envio del formulario

const formElement = document.querySelector(".popup__container");

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".form__name");
  const jobInput = document.querySelector(".form__about-me");
  const profilename = document.querySelector(".data__name");
  const profilejob = document.querySelector(".data__job");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profilename.textContent = nameValue;
  profilejob.textContent = jobValue;
  handleClosePopup();
});

// Funcion para habilitar un boton cuando los campos estan rellenos

const nameInput = document.querySelector(".form__name");
const jobInput = document.querySelector(".form__about-me");
const submitactive = document.querySelector(".form__send");

function saveData() {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  if (nameValue != "" && jobValue != "") {
    submitactive.classList.add("form__send_active");
  } else {
    submitactive.classList.remove("form__send_active");
  }
}

nameInput.addEventListener("input", saveData);
jobInput.addEventListener("input", saveData);

// Resto del codigo sprint 8

function createCard(name, link) {
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
    handleOpenImage(name, link);
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
  createCard(item.name, item.link);
});

cardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector(".form__title");
  const cardUrlInput = document.querySelector(".form__url");
  const titleValue = cardTitleInput.value;
  const imageValue = cardUrlInput.value;
  createCard(titleValue, imageValue);
  handleClosePopupAdd();
});

//like buttom
