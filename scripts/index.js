//variables a utilizar
const form = document.getElementById("form");
const formCard = document.getElementById("formCard");
const allFormList = document.querySelectorAll("form");
const nameUser = document.querySelector(".profile__info-name");
const jobInfo = document.querySelector(".profile__info-description");
const nameInformation = document.getElementById("editName");
const jobInformation = document.getElementById("editJob");
const placeTitleInformation = document.getElementById("editTitle");
const linkInformation = document.getElementById("editImage");
const saveButton = document.getElementById("save");
const saveButtonCard = document.getElementById("saveCard");
const editButton = document.getElementById("editButton");
const addButton = document.getElementById("addButton");
const closeButton = document.getElementById("close");
const closeButtonCard = document.getElementById("closeCard");
const templateCard = document.getElementById("templateCard");
const cardsList = document.querySelector(".content__grid");
const inputFormList = form.querySelectorAll(".popup__form-input");
const cardImage = document.querySelector(".content__grid-card-container");
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

//función para crear las cartas
initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function createCard(name, link) {
  const cloneCard = templateCard.content
    .querySelector(".content__grid-card")
    .cloneNode(true);
  const cardTitle = cloneCard.querySelector(".content__grid-description-text");
  const cardImage = cloneCard.querySelector(".content__grid-image");
  const cardLikeButton = cloneCard.querySelector(
    ".content__grid-description-like"
  );
  const cardRemoveButton = cloneCard.querySelector(
    ".content__grid-description-trash"
  );
  cardTitle.textContent = name;
  cardImage.src = link;
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("content__grid-description-like_is-active");
  });
  cardRemoveButton.addEventListener("click", function () {
    cloneCard.remove(); //<== función para eliminar tarjeta
  });
  //<== función para mostrar imágen grande
  cardImage.addEventListener("click", function () {
    document.querySelector(".content__grid-card-container").style.display =
      "flex";
    const cardImageBig = (document.querySelector(
      ".content__grid-card-image"
    ).src = link);
    const cardImageTitle = document.querySelector(
      ".content__grid-card-image-title"
    );
    cardImageTitle.textContent = name;
    console.log(cardImageBig);
  });
  const closeButtonCardImage = document.querySelector(
    ".content__grid-card-image-close-button"
  ); //<== variable botón imágen grande
  closeButtonCardImage.addEventListener("click", function () {
    document.querySelector(".content__grid-card-container").style.display =
      "none"; //<== función para cerrar imágen grande
  });

  cardsList.prepend(cloneCard);
}

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

//función para mostrar el formulario de tarjetas y la información escrita
function openFormCard(evt) {
  evt.preventDefault();
  document.getElementById("formCard").style.display = "flex";
}

//función para guardar los nombres en el formulario de tarjeta
function saveDataCard(evt) {
  evt.preventDefault();
  createCard(placeTitleInformation.value, linkInformation.value);
  document.getElementById("formCard").style.display = "none";
}

//función para cerrar el formulario de tarjetas
function closeFormCard(evt) {
  evt.preventDefault();
  document.getElementById("formCard").style.display = "none";
}

//función para cerrar form con click
function closeFormOutside(evt) {
  if (evt.target.classList.contains("popup")) {
    closeForm(evt);
  }
}

//función para cerrar form de tarjetas con click
function closeFormCardOutside(evt) {
  if (evt.target.classList.contains("popup-card")) {
    closeFormCard(evt);
  }
}

//función para cerrar imagen con click
function closeImageOutside(evt) {
  if (evt.target.classList.contains("content__grid-card-container")) {
    document.querySelector(".content__grid-card-container").style.display =
      "none";
  }
}

//Eventos para llamar a las funciones
cardImage.addEventListener("click", closeImageOutside);
form.addEventListener("click", closeFormOutside);
formCard.addEventListener("click", closeFormCardOutside);
form.addEventListener("submit", saveData);
formCard.addEventListener("submit", saveDataCard);
addButton.addEventListener("click", openFormCard);
editButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
closeButtonCard.addEventListener("click", closeFormCard);
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeForm(evt);
    closeFormCard(evt);
    document.querySelector(".content__grid-card-container").style.display =
      "none";
  }
});
