function exbirUser() {
  let Dados = document.getElementById("ModalDadosuser");

  var html = `<form action="">
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Nome:</p>
        <div class="formInput">
        <input type="text" id="txt_nome" value="${usuarioCorrente.nome}">
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">E-mail:</p>
        <div class="formInput">
        <input type="text" id="txt_email" value="${usuarioCorrente.email}">
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Senha:</p>
        <div class="formInput">
        <input type="text" id="txt_senha" value="${usuarioCorrente.senha}">
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Endereço:</p>
        <div class="formInput">
        <input type="text" id="txt_endereco" value="${usuarioCorrente.endereco}">
        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Telefone:</p>
        <div class="formInput">
        <input type="text" id="txt_telefone" value="${usuarioCorrente.telefone}">

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Cidade:</p>
        <div class="formInput">
        <input type="text" id="txt_cidade" value="${usuarioCorrente.cidade}">

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">Estado:</p>
        <div class="formInput">
        <input type="text" id="txt_estado" value="${usuarioCorrente.estado}">

        </div>
      </div>
      <div class="mb-3 d-flex flex-row justify-content-around">
        <p class="CampoDado">CEP:</p>
        <div class="formInput">
        <input type="text" id="txt_CEP" value="${usuarioCorrente.cep}">

        </div>
      </div>
      
    </form>
    `;

  Dados.innerHTML += html;
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
  // let dbUser = JSON.parse(localStorage.getItem("db_user"));
  // Atualiza os valores no objeto usuarioCorrente
  dadosedit.nome = nome;
  dadosedit.email = email;
  dadosedit.senha = senha;
  dadosedit.endereco = endereco;
  dadosedit.telefone = telefone;
  dadosedit.cidade = cidade;
  dadosedit.estado = estado;
  dadosedit.cep = cep;

  sessionStorage.setItem("usuarioCorrente", JSON.stringify(dadosedit));

  // dbUser.Login[dadosedit] = dadosedit;
  // localStorage.setItem("db_user", JSON.stringify(dbUser));
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
  // console.log(JSON.parse(dadosedit));
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
let botao = document.getElementById("editar");
botao.addEventListener("click", Editar);

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener("load", exbirUser);
