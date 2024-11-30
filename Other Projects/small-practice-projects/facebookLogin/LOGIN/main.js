const email = document.getElementById("email");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbtn");
const createNewbtn = document.getElementById("createNewbtn")

email.addEventListener("keyup" , validateEmail());
password.addEventListener("keyup" , validatePassword());



