const container = document.querySelector(".content__grid-card-container");
const bigImage = document.querySelector(".content__grid-card-image");
const bigTitle = document.querySelector(".content__grid-card-image-title");
const closeImageButton = document.querySelector(
  ".content__grid-card-image-close-button"
);
const popupCard = document.querySelector(".popup-card");
const addButton = document.getElementById("addButton");
const closeButtonCard = document.getElementById("closeCard");
const form = document.getElementById("form");

//abrir imagen
export function openBigImage(name, link) {
  bigImage.src = link;
  bigImage.alt = name;
  bigTitle.textContent = name;
  container.style.display = "flex";
}

//abrir formulario de cartas
function openFormCard() {
  popupCard.style.display = "flex";
}

addButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFormCard();
});

//cerrar imagen y editor de cartas (click y Esc)
function closeBigImage() {
  container.style.display = "none";
}

function closeFormCard() {
  popupCard.style.display = "none";
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (container.style.display === "flex") closeBigImage();
    if (popupCard.style.display === "flex") closeFormCard();
  }
});

container.addEventListener("click", (evt) => {
  if (evt.target === container) {
    closeBigImage();
  }
});

popupCard.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup-card")) {
    closeFormCard();
  }
});

//cerrar imagen y editor de cartas (botón)
closeImageButton.addEventListener("click", closeBigImage);
closeButtonCard.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeFormCard();
});
