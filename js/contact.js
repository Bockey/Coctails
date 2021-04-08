logoLink();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameErrorMessage = document.querySelector("#nameErrorMessage");
const subject = document.querySelector("#subject");
const subjectErrorMessage = document.querySelector("#subjectErrorMessage");
const email = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#emailErrorMessage");
const address = document.querySelector("#address");
const addressErrorMessage = document.querySelector("#addressErrorMessage");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameErrorMessage.style.display = "none";
  } else {
    nameErrorMessage.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectErrorMessage.style.display = "none";
  } else {
    subjectErrorMessage.style.display = "block";
  }
  if (checkLength(address.value, 24) === true) {
    addressErrorMessage.style.display = "none";
  } else {
    addressErrorMessage.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailErrorMessage.style.display = "none";
  } else {
    emailErrorMessage.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// adding a success message to the form with class add and remove

const successMessageDisplay = document.querySelector(".success");
const button = document.querySelector("button");
const close = document.querySelector(".close");
function successMessage() {
  if (
    checkLength(name.value, 0) === true &&
    checkLength(subject.value, 9) === true &&
    checkLength(address.value, 24) === true &&
    validateEmail(email.value) === true
  ) {
    successMessageDisplay.classList.add("visibility");
  }
}

button.addEventListener("click", successMessage);
close.addEventListener("click", () => {
  successMessageDisplay.classList.remove("visibility");
});
