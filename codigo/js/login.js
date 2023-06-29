(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//

let form = document.getElementById("formulario");

let cad = JSON.parse(localStorage.getItem('Cadastro'))

function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  if (email === cad[0].email && senha === cad[0].senha) {
    window.location.href = "Perfil.html";
  } else {
    alert("Login/senha incorretos!");
  }
}

form.addEventListener("submit", login);
