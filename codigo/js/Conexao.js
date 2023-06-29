function LerDB() {
    let requisicao = "Json/DB.json";

    return fetch(requisicao)
        .then((res) => res.json())
        .then((informacoes) => {
            localStorage.setItem("db_user", JSON.stringify(informacoes));
        });
}

var db_usuarios = {};
var usuarioCorrente = {};

function BancoDB() {
    usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");

    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    var lido_usuarios = localStorage.getItem("db_user");
    console.log(JSON.parse(lido_usuarios));
    if (!lido_usuarios) {
        // Se NÃO há dados no localStorage
        LerDB();

    } else {
        // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(lido_usuarios);
    }
}

// Chama a função LerDB para obter os dados do servidor JSON

// Chama a função BancoDB para carregar os dados do localStorage
BancoDB();
