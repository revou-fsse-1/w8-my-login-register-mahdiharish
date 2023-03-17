// DUMMY DATA
let dummyData = [
  { name: "Ferdy Sambo", age: 50, email: "ferdys@mbo.com" },
  { name: "Puan Maharani", age: 49, email: "puanm@harani.com" },
  { name: "Rina", age: 25, email: "ina@rocketmail.com" },
];

// NAME VALIDATION
const checkName = () => {
  const nameInput = document.getElementById("inputName").value;
  const nameRegex = /[A-Za-z]/;
  const nameError = document.getElementById("nameError");
  if (!nameRegex.test(nameInput)) {
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
  }
};
document.getElementById("inputName").addEventListener("input", checkName);

// EMAIL VALIDATION
const checkEmail = () => {
  const emailInput = document.getElementById("inputEmail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.getElementById("emailError");
  if (!emailRegex.test(emailInput)) {
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
  }
};
document.getElementById("inputEmail").addEventListener("input", checkEmail);

// AGE VALIDATION
const checkAge = () => {
  const ageInput = document.getElementById("inputAge").value;
  const ageError = document.getElementById("ageError");
  if (isNaN(ageInput)) {
    ageError.style.display = "block";
    return false;
  } else {
    ageError.style.display = "none";
  }
};
document.getElementById("inputAge").addEventListener("input", checkAge);
