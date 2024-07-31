let firstNameError = document.getElementById("first-name-error");
let lastNameError = document.getElementById("last-name-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");

function validateFirstName() {
  let firstName = document.getElementById("contact-first-name").value;

  if (firstName.length == 0) {
    firstNameError.innerHTML = "First Name is required";
    return false;
  }

  firstNameError.innerHTML = "";
  return true;
}

function validateLastName() {
  let lastName = document.getElementById("contact-last-name").value;

  if (lastName.length == 0) {
    lastNameError.innerHTML = "Last Name is required";
    return false;
  }

  lastNameError.innerHTML = "";
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " or more characters required";
    return false;
  }

  messageError.innerHTML = "";
  return true;
}

function validateForm() {
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    Swal.fire({
      backdrop: true,
      icon: "error",
      title: "Oops...",
      text: "Please fill in the right information!",
    });
    return false;
  } else {
    Swal.fire({
      backdrop: true,
      icon: "success",
      title: "Your message has been sent!",
      text: "You'll receive a reply in less than 24hrs",
      showConfirmButton: false,
    });
  }
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  submitTimer = setTimeout(() => {
    this.submit();
    console.log("Submitted after 1.3 seconds");
  }, 1300);
}
