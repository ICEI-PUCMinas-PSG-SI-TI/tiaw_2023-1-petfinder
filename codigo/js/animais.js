function DadosAnimais() {
  const urlParams = new URLSearchParams(window.location.search);
  let dados = "http://localhost:3000/Animal";

  fetch(dados)
    .then((res) => res.json())
    .then((animais) => mostarAnimais(animais));
}

function mostarAnimais(animais) {
  let animaisId = document.getElementById("aroz");
  var html = animais
    .map(function (info) {
      return `<div class="card">
    <img
      src="${info.Imagem}"
      class="card-img-top imagem-cards"
      alt="..."
    />
    <div class="card-body">
      <h2 class="card-title">${info.Nome}</h2>
      <p>Local: ${info.Perdido}</p>
      <p>
        Caso encontre entre em Contato:<strong> ${info.Telefone}</strong>
      </p>
      <div
        class="modal fade"
        id="exemplo${info.Id}"
        aria-labelledby=""
        tabindex="-1"
        style="display: none"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" >${info.Nome}</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <img
                  src="${info.Imagem}"
                  class="img-fluid imagem-cards"
                  alt="..."
                />
              </div>
              <br />
              <div class="descricao">
                <p><strong>Raça:</strong> ${info.Raca}</p>
                <p><strong>Cor:</strong> ${info.Cor}</p>
                <p><strong>Tamanho:</strong> ${info.Tamanho}</p>
                <p>
                  <strong>Descrição:</strong> ${info.Descricao}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary"
        data-bs-target="#exemplo${info.Id}"
        data-bs-toggle="modal"
      >
        Detalhes
      </button>
    </div>
  </div>`;
    })
    .join("");
  animaisId.innerHTML += html;
}

window.onload = DadosAnimais;
