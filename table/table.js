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
  if (isNaN(ageInput)) {
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
      "<td><button class='edit' type='button' onclick='editData()" +
      i +
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteData()" +
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
  data.push({ name, email, age });
  showData();
}
document.getElementById("addData").addEventListener("click", addData());

// EDIT DATA
function editData(index) {
  data[index] = { name: name, email: email, age: age };
  let namePrompt = prompt("Edit Name", data[index].name);
  let emailPrompt = prompt("Edit Email", data[index].email);
  let agePrompt = prompt("Edit Age", data[index].age);
  showData();
}

// DELETE DATA
function deleteData(index) {
  data.splice(index, 1);
  showData();
}

// SHOW DATA ON LOAD
window.onload = function () {
  showData();
};
