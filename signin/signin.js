// CHECK EMAIL
document.getElementById("emailSignIn").addEventListener(
  "input",
  (checkEmail = () => {
    const emailSignIn = document.getElementById("emailSignIn").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailSignIn)) {
      document.getElementById("emailValidation").innerHTML = "Invalid email!";
    } else {
      document.getElementById("emailValidation").innerHTML = "";
    }
  })
);

// CHECK PASSWORD
document.getElementById("pwSignIn").addEventListener(
  "input",
  (checkPassword = () => {
    const passwordSignIn = document.getElementById("pwSignIn").value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(passwordSignIn)) {
      document.getElementById("pwValidation").innerHTML =
        "Must contain at least 8 characters, one uppercase, lowercase, number, and symbol!";
    } else {
      document.getElementById("pwValidation").innerHTML = "";
    }
  })
);
