// //función para seleccionar y validar todos los formularios
// export function allValidation() {
//   const allFormList = document.querySelectorAll("form"); //<--con esta constante, puedes seleccionar todos los formularios.
//   allFormList.forEach(function (form) {
//     const inputFormList = Array.from(
//       form.querySelectorAll(".popup__form-input")
//     );
//     setEventListeners(form, inputFormList);
//   });
// }

// //función para gestionar los eventos y variables, recorrer los inputs de los formularios.
// function setEventListeners(form, inputFormList) {
//   const buttonElement = form.querySelector(".popup__form-button");
//   validateButton(buttonElement, inputFormList);
//   form.addEventListener("submit", function (evt) {
//     evt.preventDefault();
//   });
//   inputFormList.forEach(function (input) {
//     input.addEventListener("input", function () {
//       showInputError(input);
//       validateButton(buttonElement, inputFormList);
//     });
//   });
// }

// //funcion para validar el boton al tener los campos válidos
// function validateButton(buttonElement, inputFormList) {
//   if (checkInputsValidity(inputFormList)) {
//     buttonElement.classList.add("popup__form-button_disable");
//   } else {
//     buttonElement.classList.remove("popup__form-button_disable");
//   }
// }

// //función para comprovar la validez de los inputs
// function checkInputsValidity(inputFormList) {
//   return inputFormList.some(function (input) {
//     return !input.validity.valid;
//   });
// }

// //funcion para estandarizar el mensaje de error span
// function showInputError(input) {
//   const spanMessage = document.querySelector(`#${input.id}-error`);
//   spanMessage.textContent = input.validationMessage;
// }
// allValidation();
