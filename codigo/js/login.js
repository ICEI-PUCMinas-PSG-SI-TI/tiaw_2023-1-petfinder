const LOGIN_URL = "Login.html";

function loginUser(login, senha) {
  // Verifica todos os itens do banco de dados de usuarios
  // para localizar o usuário informado no formulario de login
  console.log(db_usuarios);
  console.log(db_usuarios.Login.length);
  for (var i = 0; i < db_usuarios.Login.length; i++) {
    var usuario = db_usuarios.Login[i];

    // Se encontrou login, carrega usuário corrente e salva no Session Storage
    console.log(usuario.idlogin);
    if (login === usuario.Email && senha === usuario.Senha) {
      usuarioCorrente.id = usuario.idlogin;
      usuarioCorrente.email = usuario.Email;
      usuarioCorrente.senha = usuario.Senha;
      usuarioCorrente.nome = usuario.Nome;
      usuarioCorrente.endereco = usuario.Endereco;
      usuarioCorrente.telefone = usuario.Telefone;
      usuarioCorrente.cidade = usuario.Cidade;
      usuarioCorrente.estado = usuario.Estado;
      usuarioCorrente.cep = usuario.CEP;

      // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
      sessionStorage.setItem(
        "usuarioCorrente",
        JSON.stringify(usuarioCorrente)
      );

      // Retorna true para usuário encontrado
      return true;
    }
  }

  // Se chegou até aqui é porque não encontrou o usuário e retorna falso
  return false;
}

let form = document.getElementById("formulario");

function processaFormLogin(e) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  e.preventDefault();

  // Obtem os dados de login e senha a partir do formulário de login
  var username = document.getElementById("email").value;
  var password = document.getElementById("senha").value;

  // Valida login e se estiver ok, redireciona para tela inicial da aplicação
  resultadoLogin = loginUser(username, password);

  if (resultadoLogin) {
    window.location.href = "perfil.html";
  } else {
    // Se login falhou, avisa ao usuário
    alert("Usuário ou senha incorretos");
  }
}

form.addEventListener("submit", processaFormLogin);

function logOutUser() {
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
  window.location = LOGIN_URL;
}
