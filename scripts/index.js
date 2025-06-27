//variables a utilizar
let form = document.getElementById("form");
let nameUser = document.querySelector(".profile__info-name");
let jobInfo = document.querySelector(".profile__info-description");
let nameInformation = document.getElementById("editName");
let jobInformation = document.getElementById("editJob");
let saveButton = document.getElementById("save");
let editButton = document.getElementById("editButton");
let closeButton = document.getElementById("close");

//función para mostrar el formulario y la información escrita
function openForm(evt) {
  document.getElementById("form").style.display = "flex";
  nameInformation.value = nameUser.textContent;
  jobInformation.value = jobInfo.textContent;
}

//función para editar los nombres en el formulario
function saveData(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInformation.value;
  jobInfo.textContent = jobInformation.value;
  close();
}

//función para cerrar el formulario
function closeForm(evt) {
  document.getElementById("form").style.display = "none";
}

//Eventos para llamar a las ficnones
form.addEventListener("submit", saveData);
editButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
