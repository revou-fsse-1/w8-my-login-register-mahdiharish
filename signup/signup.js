// CHECK EMAIL
document.getElementById("registerEmail").addEventListener(
  "input",
  (checkRegisterEmail = () => {
    const emailSignUp = document.getElementById("registerEmail").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailSignUp)) {
      document.getElementById("emailValidation").innerHTML = "Invalid email!";
    } else {
      document.getElementById("emailValidation").innerHTML = "";
    }
  })
);

// CHECK PASSWORD
document.getElementById("registerPassword").addEventListener(
  "input",
  (checkRegisterPassword = () => {
    const passwordSignUp = document.getElementById("registerPassword").value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(passwordSignUp)) {
      document.getElementById("pwValidation").innerHTML =
        "Must contain at least 8 characters, one uppercase, lowercase, number, and symbol!";
    } else {
      document.getElementById("pwValidation").innerHTML = "";
    }
  })
);

// REGISTER NEW USER
const userList = JSON.parse(localStorage.getItem("users")) || [
  { email: "admin@gmail.com", password: "Admin123!" },
];
document.getElementById("registerBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");
  let validUser = true;
  if (!checkRegisterEmail(email)) {
    document.getElementById("emailValidation").innerHTML = "Invalid email!";
    validUser = false;
  } else {
    document.getElementById("emailValidation").innerHTML = "";
  }
  if (!checkRegisterPassword(password)) {
    document.getElementById("passwordValidation").innerHTML =
      "Must contain at least 8 characters, one uppercase, lowercase, number, and symbol!";
    validUser = false;
  } else {
    document.getElementById("passwordValidation").innerHTML = "";
  }
  if (validUser) {
    userList.push({ email: email.value, password: password.value });
    localStorage.setItem("users", JSON.stringify(userList));
    window.location.href = "./signin/signin.html";
  }
});
