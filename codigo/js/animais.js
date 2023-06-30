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
      // Chama a função LerDB para obter os dados do servidor JSON
      LerDB();
    } else {
      // Se há dados no localStorage
  
      // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
      db_usuarios = JSON.parse(lido_usuarios);
    }
  }
  
  
  // Chama a função BancoDB para carregar os dados do localStorage
  BancoDB();

  var busca = document.getElementById('busca').onclick = pesquisa

  function pesquisa(){
    var texto = document.getElementById('pesquisa').value
    if(texto.length > 0){
        var cards = document.getElementsByClassName('card')
        for(i = 0;i<cards.length;i++){
          var card = cards[i]
          var textocard = card.textContent
          textocard = textocard.toLowerCase()
          texto = texto.toLowerCase()
          if(!textocard.includes(texto)){
            card.style.display = 'none'
          }
        }
    }
  }