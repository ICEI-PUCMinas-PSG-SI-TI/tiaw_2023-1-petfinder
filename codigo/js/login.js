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

function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  if (email === "admin@admin.com" && senha === "123456") {
    window.location.href = "Home.html";
  }
}

form.addEventListener("submit", login);
