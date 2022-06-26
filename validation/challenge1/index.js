const mail = document.getElementById("mail");
const form = document.querySelector("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   // use contraint api to check if the email is valid
   if (mail.validity.valid) {
      error.classList.add("hide");
      alert("Valid email");
   } else {
      error.classList.remove("hide");
   }
});
