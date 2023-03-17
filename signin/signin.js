// CHECK EMAIL BY INPUT
const checkSignInEmail = () => {
  const emailSignIn = document.getElementById("signInEmail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailSignIn)) {
    document.getElementById("emailValidation").innerHTML = "Invalid email!";
  } else {
    document.getElementById("emailValidation").innerHTML = "";
  }
};
document
  .getElementById("signInEmail")
  .addEventListener("input", checkSignInEmail);

// CHECK PASSWORD BY INPUT
const checkSignInPassword = () => {
  const passwordSignIn = document.getElementById("signInPassword").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordRegex.test(passwordSignIn)) {
    document.getElementById("pwValidation").innerHTML =
      "Must contain at least 8 characters, one uppercase, lowercase, number, and symbol!";
  } else {
    document.getElementById("pwValidation").innerHTML = "";
  }
};
document
  .getElementById("signInPassword")
  .addEventListener("input", checkSignInPassword);

// USER LOGIN
const userList = JSON.parse(localStorage.getItem("users"));
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("signInEmail");
  const password = document.getElementById("signInPassword");
  let validEmail = true;
  let validPassword = true;
  checkSignInEmail();
  checkSignInPassword();
  if (document.getElementById("emailValidation").innerHTML !== "") {
    validEmail = false;
  }
  if (document.getElementById("pwValidation").innerHTML !== "") {
    validPassword = false;
  }
  if (validEmail && validPassword) {
    const registeredUser = userList.find((user) => email.value === user.email);
    if (!registeredUser) {
      document.getElementById("emailValidation").innerHTML =
        "Email is not registered yet!";
    } else if (password.value !== registeredUser.password) {
      document.getElementById("pwValidation").innerHTML =
        "Password is incorrect!";
    } else {
      alert("Login successful! Redirecting...");
      window.location.href = "/table/table.html";
    }
  }
});
