function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function limparform() {
  document.getElementById("txt_nome").value = "";
  document.getElementById("txt_raca").value = "";
  document.getElementById("txt_endereco").value = "";
  document.getElementById("txt_telefone").value = "";
  document.getElementById("txt_descricao").value = "";
}

function addUser(nome, raca, endereco, telefone, descricao) {
  // Cria um objeto de usuario para o novo usuario
  let newId = generateUUID();
  let Newdog = {
    IdAnimal: newId,
    Nome: nome,
    Raca: raca,
    Endereço: endereco,
    Telefone: telefone,
    Descricao: descricao,
  };

  db_usuarios.CadastroAnimal.push(Newdog);
  // Salva o novo banco de dados com o novo usuário no localStorage
  localStorage.setItem("db_user", JSON.stringify(db_usuarios));
}

// Adiciona o usuário no banco de dados
function salvaLogin(e) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  e.preventDefault();

  // Obtem os dados do formulário
  let nome = document.getElementById("txt_nome").value;
  let raca = document.getElementById("txt_raca").value;
  let endereco = document.getElementById("txt_endereco").value;
  let telefone = document.getElementById("txt_telefone").value;
  let descricao = document.getElementById("txt_descricao").value;
  addUser(nome, endereco, telefone, descricao, raca);
  alert("Cachorro Cadastrado!");
  limparform();

  // Oculta a div modal do login
  //document.getElementById ('loginModal').style.display = 'none';
}

let form2 = document.getElementById("cadastro");
form2.addEventListener("submit", salvaLogin);
