function login() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  if (email == "admin@admin.com" && senha == "123456") {
    window.location.href = "Home.html";
  } else {
    alert("Favor preencher os campos corretamente!");
  }
}
