var text = document.getElementById("textArea");

function upload() {
  var questions = [];
  var value = text.value.split("\n");
  var obj = {};
  var count = 1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "") {
      questions.push(obj);
      obj = {};
      count = 1;
    } else {
      if (value[i].indexOf("?") !== -1) {
        obj.question = value[i];
      } else {
        if (value[i].indexOf("*") !== -1) {
          obj.answer = value[i].slice(0, -1);
          obj["option" + count] = value[i].slice(0, -1);
        } else {
          obj["option" + count] = value[i];
        }
        count++;
      }
    }
  }
  var msg =
  "Rules: place question mark at the end or every question, enter a space after complete typing the questions and also place enter after the last question in your data bank";
Swal.fire({
  title: msg,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});
}



var userData = [];
function formRegister() {
  event.preventDefault();
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phoneNumber = document.getElementById("number");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var firstNameError = document.getElementById("firstNameError");
  var lastNameError = document.getElementById("lastNameError");
  var userNameError = document.getElementById("userNameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");
  var passwordError = document.getElementById("passwordError");
  var cPasswordError = document.getElementById("cPasswordError");

  if (firstName.value === "") {
    firstNameError.innerHTML = `
  <p class="err">*first name is required</p>`;
  } else if (lastName.value === "") {
    lastNameError.innerHTML = `
  <p class="err">*last name is required</p>`;
  } else if (name.value === "") {
    userNameError.innerHTML = `
  <p class="err">*user name is required</p>`;
  } else if (email.value === "") {
    emailError.innerHTML = `
  <p class="err">*email is required</p>`;
  } else if (phoneNumber.value === "") {
    phoneError.innerHTML = `
  <p class="err">*Phone number is required</p>`;
  } else if (password.value === "" && confirmPassword.value === "") {
    passwordError.innerHTML = `
  <p class="err">*password is required</p>`;
    cPasswordError = `
  <p class="err">*password is required</p>`;
  } else if (password.value !== confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  } else {
    Swal.fire({
      icon: "success",
      title: `registered sucessfully <br/> Thank You ${name.value.toUpperCase()}`,
      showConfirmButton: false,
      timer: 2000,
    });
    
    var obj = {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    
      userData.push(obj);
console.log(userData)
 
    localStorage.setItem("userData", JSON.stringify(userData));
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 2000);
  }
  
}
function checkPassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var cPasswordError = document.getElementById("cPasswordError");
  if (password.value === confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="succes">*password matched</p>`;
  } else {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  }
}

function redirect() {
  window.location.href = "./signup.html";
}
function logout() {
  setTimeout(redirect, 2000);
}

function login() {
  event.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var loginData = JSON.parse(localStorage.getItem("userData"));
  for (var i = 0; i < loginData.length; i++) {
    console.log(loginData[i].email);
    if (email.value !== loginData[i].email) {
      emailError.innerHTML = `
    <p class="err">*this email is not registered</p>`;
    } else if (password.value !== loginData[i].password) {
      passwordError.innerHTML = `
    <p class="err">*password is wrong</p>`;
    } else {
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 2000);
    }
  }
}

function redirect() {
    window.location.href = "./login.html";
  }
  function logout() {
    setTimeout(redirect, 1000);
  }
