function exbirUser() {
  let Dados = document.getElementById("DadosUser");
  var html = `<form action="">
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Nome:</p>
        <div class="formInput">
        <input type="text" id="txt_nome" value="${usuarioCorrente.nome}"disabled>
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">E-mail:</p>
        <div class="formInput">
        <input type="text" id="txt_email" value="${usuarioCorrente.email}"disabled>
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Senha:</p>
        <div class="formInput">
        <input type="text" id="txt_senha" value="${usuarioCorrente.senha}"disabled>
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Endereço:</p>
        <div class="formInput">
        <input type="text" id="txt_endereco" value="${usuarioCorrente.endereco}"disabled>
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Telefone:</p>
        <div class="formInput">
        <input type="text" id="txt_telefone" value="${usuarioCorrente.telefone}"disabled>

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Cidade:</p>
        <div class="formInput">
        <input type="text" id="txt_cidade" value="${usuarioCorrente.cidade}"disabled>

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Estado:</p>
        <div class="formInput">
        <input type="text" id="txt_estado" value="${usuarioCorrente.estado}"disabled>

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">CEP:</p>
        <div class="formInput">
        <input type="text" id="txt_CEP" value="${usuarioCorrente.cep}">

        </div>
      </div>
      <input class="btn btn-success" type="submit" id="editar" value="Editar">
    </form>
    `;

  Dados.innerHTML += html;
  let botao = document.getElementById("editar");
  botao.addEventListener("click", Editar);
}
function Novosdados(
  nome,
  email,
  senha,
  endereco,
  telefone,
  cidade,
  estado,
  cep
) {
  let dadosedit = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  // Cria um objeto de usuario para editar usuario
  dadosedit.push({
    Nome: nome,
    Email: email,
    Senha: senha,
    Endereco: endereco,
    Telefone: telefone,
    Cidade: cidade,
    Estado: estado,
    CEP: cep,
  });
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(dadosedit));
  console.log(dadosedit);
}

function Editar() {
  let nomed = document.getElementById("txt_nome").value;
  let emaild = document.getElementById("txt_email").value;
  let senhad = document.getElementById("txt_senha").value;
  let cidaded = document.getElementById("txt_cidade").value;
  let enderecod = document.getElementById("txt_endereco").value;
  let telefoned = document.getElementById("txt_telefone").value;
  let estadod = document.getElementById("txt_estado").value;
  let cepd = document.getElementById("txt_CEP").value;
  Novosdados(
    nomed,
    emaild,
    senhad,
    cidaded,
    enderecod,
    telefoned,
    estadod,
    cepd
  );
}
// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener("load", exbirUser);
