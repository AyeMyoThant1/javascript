const nameTag = document.getElementById("name");
const errMsg = document.getElementsByClassName("nameErr")[0];
const emailTag = document.getElementById("email");
const emailErr = document.getElementsByClassName("emailErr")[0];
const phoneTag = document.getElementById("phone");
const phoneErr = document.getElementsByClassName("phoneErr")[0];
const pwdTag = document.getElementById("pwd");
const pwdErr = document.getElementsByClassName("pwdErr")[0];
const showTag = document.getElementsByClassName("showpwd")[0];
const checkTag = document.querySelectorAll(".check");
const radioTag = document.querySelectorAll(".Validate");
const submitTag = document.getElementById("submit");
const checkErr = document.getElementsByClassName("checkErr")[0];
const radioErr = document.getElementsByClassName("radioErr")[0];
let userData = JSON.parse(localStorage.getItem("userdata"))
  ? JSON.parse(localStorage.getItem("userdata"))
  : [];
function isNull(value, name) {
  if (value === "") {
    return `${name} `;
  }
  return "";
}

const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isEmail(value) {
  if (!email.test(value)) {
    return `Email format wrong!`;
  }
  return "";
}

function isPhone(vlaue) {
  if (!digit.test(phoneTag.value)) {
    return "Enter only digit";
  }
  return "";
}

// Name
nameTag.addEventListener("change", () => {
  errMsg.innerHTML = isNull(nameTag.value, "Please enter name");
});

//email
function checkEmail() {
  if (emailTag.value === "") {
    emailErr.innerHTML = isNull(emailTag.value, "please enter email");
  } else {
    emailErr.innerHTML = isEmail(emailTag.value);
  }
}
emailTag.addEventListener("change", () => {
  checkEmail();
});

const digit = /^[0-9]+$/;
phoneTag.addEventListener("change", () => {
  if (isNull(phoneTag.value, "Please enter phone number")) {
    phoneErr.innerHTML = isNull(phoneTag.value, "Please enter phone number");
  } else {
    phoneErr.innerHTML = isPhone(phoneTag.value);
  }
});

//password
pwdTag.addEventListener("change", () => {
  pwdErr.innerHTML = isNull(pwdTag.value, "Please enter password");
});

//show pwd
showTag.addEventListener("click", () => {
  if (pwdTag.type == "password") {
    pwdTag.type = "text";
  } else {
    pwdTag.type = "password";
  }
});

//submit button
submitTag.addEventListener("click", () => {
  // name
  // email
  // phone
  // password
  // checkbox
  // radio

  var checkArray = [];
  for (var i = 0; i < checkTag.length; i++) {
    if (checkTag[i].checked) {
      checkArray.push(checkTag[i].value);
    }
  }
  console.log(checkArray);

  if (checkArray.length == 0) {
    checkErr.innerHTML = "please choice one";
  } else {
    checkErr.innerHTML = "";
  }

  // radio
  var radioArray = [];
  for (var i = 0; i < radioTag.length; i++) {
    if (radioTag[i].checked) {
      radioArray.push(radioTag[i].value);
    }
  }

  console.log(radioArray);

  if (radioArray.length == 0) {
    radioErr.innerHTML = "please choice one";
  } else {
    radioErr.innerHTML = "";
  }

  if (isNull(nameTag.value, "Please enter name")) {
    errMsg.innerHTML = isNull(nameTag.value, "Please enter name");
  }

  checkEmail();

  if (isNull(phoneTag.value, "Please enter phone number")) {
    phoneErr.innerHTML = isNull(phoneTag.value, "Please enter phone number");
  } else {
    phoneErr.innerHTML = isPhone(phoneTag.value);
  }

  if (isNull(pwdTag.value, "Please enter password")) {
    pwdErr.innerHTML = isNull(pwdTag.value, "Please enter password");
  }
  if (
    phoneErr.innerHTML === "" &&
    pwdErr.innerHTML === "" &&
    checkErr.innerHTML === "" &&
    radioErr.innerHTML === "" &&
    emailErr.innerHTML === "" &&
    errMsg.innerHTML === ""
  ) {
    userData.push({
      name: nameTag.value,
      email: emailTag.value,
      phone: phoneTag.value,
      check: checkArray,
      radio: radioArray,
    });
    localStorage.setItem("userdata", JSON.stringify(userData));
    window.location.href = "useData.html";
  }
});
