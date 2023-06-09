// DATA DUMMY
let data = [
  { name: "John", age: 25, email: "john@example.com" },
  { name: "Jane", age: 30, email: "jane@example.com" },
  { name: "Bob", age: 35, email: "bob@example.com" },
];

// NAME VALIDATION
let checkName = () => {
  let nameInput = document.getElementById("inputName").value;
  let nameRegex = /[A-Za-z]/;
  let nameError = document.getElementById("nameError");
  if (!nameRegex.test(nameInput)) {
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
  }
};
document.getElementById("inputName").addEventListener("input", checkName);

// EMAIL VALIDATION
let checkEmail = () => {
  let emailInput = document.getElementById("inputEmail").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailError = document.getElementById("emailError");
  if (!emailRegex.test(emailInput)) {
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
  }
};
document.getElementById("inputEmail").addEventListener("input", checkEmail);

// AGE VALIDATION
let checkAge = () => {
  let ageInput = document.getElementById("inputAge").value;
  let ageError = document.getElementById("ageError");
  if (isNaN(ageInput) || ageInput < 0 || ageInput === "") {
    ageError.style.display = "block";
    return false;
  } else {
    ageError.style.display = "none";
  }
};
document.getElementById("inputAge").addEventListener("input", checkAge);

// SHOW DATA IN TABLE
function showData() {
  let tableData = document.querySelector("#tableData tbody");
  tableData.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Delete</button></td>";
    row += "</tr>";
    tableData.innerHTML += row;
  }
}

// ADD NEW DATA TO OBJECT
function addData() {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;
  let age = document.getElementById("inputAge").value;
  if (checkName() !== false && checkEmail() !== false && checkAge() !== false) {
    data.push({ name, email, age });
    localStorage.setItem("data", JSON.stringify(data));
  }
  showData();
}
document.getElementById("addData").addEventListener("click", addData);

// EDIT DATA
function editData(i) {
  let namePrompt = prompt("Edit Name", data[i].name);
  let emailPrompt = prompt("Edit Email", data[i].email);
  let agePrompt = prompt("Edit Age", data[i].age);
  if (
    checkName(namePrompt) !== false &&
    checkEmail(emailPrompt) !== false &&
    checkAge(agePrompt) !== false
  ) {
    data[i].name = namePrompt;
    data[i].email = emailPrompt;
    data[i].age = agePrompt;
    localStorage.setItem("data", JSON.stringify(data));
    showData();
  }
}

// DELETE DATA
function deleteData(i) {
  data.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showData();
}

// SHOW DATA ON LOAD
window.onload = function () {
  let storedData = localStorage.getItem("data");
  if (storedData !== null) {
    data = JSON.parse(storedData);
  }
  showData();
};
