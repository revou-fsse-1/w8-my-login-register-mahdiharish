const getLocalStorage = localStorage.getItem("email");

if (getLocalStorage !== null) {
  document.getElementById("headerTitle").innerHTML =
    "Welcome ${getLocalStorage}!";
}

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

// RETRIEVE DATA FROM LOCAL STORAGE
const data = JSON.parse(localStorage.getItem("data"));

// SHOW DATA IN TABLE
function showData() {
  const table = document.querySelector("#tableData tbody");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const row = "<tr>";
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
    table.innerHTML += row;
  }
}

// ADD NEW DATA TO OBJECT AND LOCAL STORAGE
function addData() {
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const age = document.getElementById("inputAge").value;
  data.push({ name: name, email: email, age: age });
  showData();
}

// EDIT DATA
function editData(index) {
  data[index] = { name: name, email: email, age: age };
  const name = prompt("Edit Name", data[index].name);
  const email = prompt("Edit Email", data[index].email);
  const age = prompt("Edit Age", data[index].age);
  localStorage.setItem("data", JSON.stringify(data));
  showData;
}

// DELETE DATA
function deleteData(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showData;
}

// SHOW DATA ON LOAD
window.onload = function () {
  showData();
};
