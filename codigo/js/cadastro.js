// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_usuarios = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    }
    else {  // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(usuariosJSON);
    }
}

var db_usuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

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

lista =

    function addUser(nome, email, senha, endereco, telefone, cidade, estado, cep) {
        // Cria um objeto de usuario para o novo usuario
        let newId = generateUUID();
        let Newuser = {
            idlogin: newId,
            Nome: nome,
            Email: email,
            Senha: senha,
            Endereco: endereco,
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

function salvaLogin(e) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    e.preventDefault();

    // Obtem os dados do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let senha2 = document.getElementById("senha2").value;
    let cidade = document.getElementById("cidade").value;
    let endereco = document.getElementById("endereco1").value;
    let telefone = document.getElementById("telefone").value;
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("CEP").value;

    if (senha != senha2) {
        alert("As senhas informadas não conferem.");
        return;
    }

    // Adiciona o usuário no banco de dados

    addUser(nome, email, senha, endereco, telefone, cidade, estado, cep);
    alert("Usuário Cadastrado!");
    //   window.location.href = "Login.html";
    // Oculta a div modal do login
    //document.getElementById ('loginModal').style.display = 'none';
}
let form2 = document.getElementById("cadastro");
form2.addEventListener("submit", salvaLogin);