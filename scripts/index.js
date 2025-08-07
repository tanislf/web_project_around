import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const cardsContainer = document.querySelector(".content__grid");

//instancia de cartas iniciales
const initialCards = [
  new Card(
    "Valle de Yosemite",
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  ),
  new Card(
    "Lago Louise",
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  ),
  new Card(
    "Montañas Calvas",
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  ),
  new Card(
    "Latemar",
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  ),
  new Card(
    "Lago di Braies",
    "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  ),
];

//renderización de todas las cartas
initialCards.forEach(function (card) {
  const cardElement = card.generateElement();
  cardsContainer.prepend(cardElement);
});

const form = document.getElementById("form");
const nameUser = document.querySelector(".profile__info-name");
const jobInfo = document.querySelector(".profile__info-description");
const nameInformation = document.getElementById("editName");
const jobInformation = document.getElementById("editJob");
const editButton = document.getElementById("editButton");
const closeButton = document.getElementById("close");

//función para mostrar el formulario y la información escrita
function openForm(evt) {
  evt.preventDefault();
  document.getElementById("form").style.display = "flex";
  nameInformation.value = nameUser.textContent;
  jobInformation.value = jobInfo.textContent;
}

//función para guardar los nombres en el formulario
function saveData(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInformation.value;
  jobInfo.textContent = jobInformation.value;
  document.getElementById("form").style.display = "none";
}

//función para cerrar el formulario
function closeForm(evt) {
  evt.preventDefault();
  document.getElementById("form").style.display = "none";
}

//función para cerrar form con click
function closeFormOutside(evt) {
  if (evt.target.classList.contains("popup")) {
    closeForm(evt);
  }
}

//Eventos para llamar a las funciones
form.addEventListener("click", closeFormOutside);
form.addEventListener("submit", saveData);
editButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (form && form.style.display === "flex") closeForm(evt);
  }
});

//validación de formularios
const formValidator = document.getElementById("form");
const formCardValidator = document.getElementById("formCard");
const validator = new FormValidator(formValidator);
const validatorCard = new FormValidator(formCardValidator);
validator.allValidation();
validatorCard.allValidation();
