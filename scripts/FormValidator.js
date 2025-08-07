export default class FormValidator {
  constructor(form) {
    this.form = form;
    this.inputFormList = Array.from(
      this.form.querySelectorAll(".popup__form-input")
    );
    this.buttonElement = this.form.querySelector(".popup__form-button");
  }
  //seleccionar formularios
  allValidation() {
    this.setEventListeners();
  }
  //gestión de eventos
  setEventListeners() {
    this.validateButton();

    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this.inputFormList.forEach((input) => {
      input.addEventListener("input", () => {
        this.showInputError(input);
        this.validateButton();
      });
    });
  }
  //mensaje de error
  showInputError(input) {
    const spanMessage = document.querySelector(`#${input.id}-error`);
    spanMessage.textContent = input.validationMessage;
  }
  //validación del botón
  validateButton() {
    if (this.checkInputsValidity()) {
      this.buttonElement.classList.add("popup__form-button_disable");
      this.buttonElement.disabled = false;
    } else {
      this.buttonElement.classList.remove("popup__form-button_disable");
      this.buttonElement.disabled.true;
    }
  }
  //comprobación de la validación
  checkInputsValidity() {
    return this.inputFormList.some((input) => !input.validity.valid);
  }
}
