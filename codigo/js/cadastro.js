function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 10) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxx".replace(/[xy]/g, function (c) {
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

function addUser(
  nome,
  email,
  senha,
  endereco,
  telefone,
  cidade,
  estado,
  cep,
  numero
) {
  // Cria um objeto de usuario para o novo usuario
  let newId = generateUUID();
  let Newuser = {
    idlogin: newId,
    Nome: nome,
    Email: email,
    Senha: senha,
    Endereco: endereco,
    Numero: numero,
    Telefone: telefone,
    Cidade: cidade,
    Estado: estado,
    CEP: cep,
  };

  db_usuarios.Login.push(Newuser);
  // Salva o novo banco de dados com o novo usuário no localStorage
  localStorage.setItem("db_user", JSON.stringify(db_usuarios));

  //   usuarioCorrente.id = newId;
  //   usuarioCorrente.login = email;
  //   usuarioCorrente.senha = senha;
  //   usuarioCorrente.nome = nome;
  //   usuarioCorrente.endereco = endereco;
  //   usuarioCorrente.telefone = telefone;
  //   localStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
}

// function limparform() {
//   document.getElementById("txt_nome").value = "";
//   document.getElementById("txt_email").value = "";
//   document.getElementById("txt_senha").value = "";
//   document.getElementById("txt_senha2").value = "";
//   document.getElementById("txt_cidade").value = "";
//   document.getElementById("txt_endereco").value = "";
//   document.getElementById("txt_telefone").value = "";
//   document.getElementById("txt_estado").value = "";
//   document.getElementById("txt_CEP").value = "";
//   document.getElementById("txt_numend").value = "";
// }

function salvaLogin(e) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  e.preventDefault();

  // Obtem os dados do formulário
  let nome = document.getElementById("txt_nome").value;
  let email = document.getElementById("txt_email").value;
  let senha = document.getElementById("txt_senha").value;
  let senha2 = document.getElementById("txt_senha2").value;
  let cidade = document.getElementById("txt_cidade").value;
  let endereco = document.getElementById("txt_endereco").value;
  let telefone = document.getElementById("txt_telefone").value;
  let estado = document.getElementById("txt_estado").value;
  let cep = document.getElementById("txt_CEP").value;
  let numero = document.getElementById("txt_numend").value;

  if (senha != senha2) {
    alert("As senhas informadas não conferem.");
    return;
  }

  // Adiciona o usuário no banco de dados

  addUser(nome, email, senha, endereco, telefone, cidade, estado, cep, numero);
  // Resposta(cep);
  alert("Usuário Cadastrado!");
  // limparform();
  //   window.location.href = "Login.html";
  // Oculta a div modal do login
  //document.getElementById ('loginModal').style.display = 'none';
}

// function Resposta(dados) {
//   if (!("erro" in dados)) {
//     //Atualiza os campos com os valores.
//     document.getElementById("txt_cidade").value = (conteudo.localidade);
//     document.getElementById("txt_estado").value = (conteudo.uf);
//     document.getElementById("txt_endereco").value = (conteudo.logradouro);
//     document.getElementById("txt_CEP").value = (conteudo.cep);
//   } //end if.
// }

// function PesquisaCEP(cep) {
//   fetch("https://viacep.com.br/ws/" + cep + "/json/")
//     .then((res) => res.JSON)
//     .then((res) => Resposta(res));
// }
let form2 = document.getElementById("cadastro");
form2.addEventListener("submit", salvaLogin);
