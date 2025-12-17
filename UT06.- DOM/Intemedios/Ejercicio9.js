const form = document.querySelector("#login");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const regexUser = /^[a-zA-Z ]{3, }+$/
const regexPass = /^[a-zA-Z ]{6, }+$/
const msg = document.querySelector("#msg");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (regexUser.test(user.value) && regexPass.test(pass.value)) {
    msg.textContent = "Login correcto";
    msg.style.color = "green";
  } else {
    msg.textContent = "Login incorrecto";
    msg.style.color = "red";
  }
})

