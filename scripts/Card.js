import { openBigImage } from "./utils.js";

const templateCard = document.getElementById("templateCard");
const cardsContainer = document.querySelector(".content__grid");
const popupCard = document.querySelector(".popup-card");
const formCard = document.querySelector(".popup-card__form");
const placeTitleInformation = document.getElementById("editTitle");
const linkInformation = document.getElementById("editImage");

//función para crear las cartas usando una clase y constructor
export default class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  //generador de cartas
  generateElement() {
    this.htmlCard = templateCard.content
      .querySelector(".content__grid-card")
      .cloneNode(true);
    this.elementImage = this.htmlCard.querySelector(".content__grid-image");
    this.elementImage.alt = this.name;
    this.elementName = this.htmlCard.querySelector(
      ".content__grid-description-text"
    );
    this.elementImage.src = this.link;
    this.elementName.textContent = this.name;

    this.likeCard();
    this.removeCard();
    this.showBigImage();

    return this.htmlCard;
  }
  // botón de like
  likeCard() {
    this.likeButton = this.htmlCard.querySelector(
      ".content__grid-description-like"
    );
    this.likeButton.addEventListener("click", () => {
      this.likeButton.classList.toggle(
        "content__grid-description-like_is-active"
      );
    });
  }
  // botón de basurero
  removeCard() {
    this.removeButton = this.htmlCard.querySelector(
      ".content__grid-description-trash"
    );
    this.removeButton.addEventListener("click", () => {
      this.htmlCard.remove();
    });
  }
  //mostrar imágen grande
  showBigImage() {
    this.elementImage.addEventListener("click", () => {
      openBigImage(this.name, this.link);
    });
    // const closeImageButton = document.querySelector(
    //   ".content__grid-card-image-close-button"
    // );
    // if (!closeImageButton.dataset.listener) {
    //   closeImageButton.addEventListener("click", () => {
    //     document.querySelector(".content__grid-card-container").style.display =
    //       "none";
    //   });
    //   closeImageButton.dataset.listener = "true";
    // }
  }
}

//creador de cartas nuevas con formulario
popupCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const title = placeTitleInformation.value.trim();
  const link = linkInformation.value.trim();

  if (title && link && /\.(jpg|jpeg|png|gif)$/i.test(link)) {
    const newCard = new Card(title, link);
    const cardElement = newCard.generateElement();
    cardsContainer.prepend(cardElement);

    formCard.reset();
    popupCard.style.display = "none";
  }
});
