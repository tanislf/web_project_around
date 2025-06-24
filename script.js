//variables a utilizar
let saveButton = document.getElementById("save");
let nameUser = document.getElementById("name");
let jobInfo = document.getElementById("info");
let nameInformation = document.getElementById("editName");
let jobInformation = document.getElementById("editJob");

//función para mostrar el formulario y la información escrita
function ShowHide() {
  let form = (document.getElementById("form").style.display = "flex");
  nameInformation.value = nameUser.innerText;
  jobInformation.value = jobInfo.innerText;
}

//función para editar los nombres en el formulario
function saveData() {
  let nameInformation = document.getElementById("editName").value;
  let jobInformation = document.getElementById("editJob").value;

  nameUser.innerText = nameInformation;
  jobInfo.innerText = jobInformation;
}
