function receber(xnome, xsenha, xendereco, xtelefone, xcidade, xestado, xcep) {
  let dadosString = JSON.parse(localStorage.getItem("Cadastro"));

  let NovoContato = {
    email: xnome,
    senha: xsenha,
    endereco: xendereco,
    telefone: xtelefone,
    cidade: xcidade,
    estado: xestado,
    cep: xcep,
  };

  dadosString.push(NovoContato);
  localStorage.setItem("Cadastro", JSON.stringify(dadosString));
}
function incluir() {
  //let objdados = ler();
  let nome = document.getElementById("Cemail").value;
  let sneah = document.getElementById("Csenha").value;
  let endereco = document.getElementById("Cendereco1").value;
  let telefone = document.getElementById("Ctelefone").value;
  let codade = document.getElementById("Ccidade").value;
  let estado = document.getElementById("Cestado").value;
  let cep = document.getElementById("Ccep").value;

  receber(nome, sneah, endereco, telefone, codade, estado, cep);
}
document.getElementById("Botao").addEventListener("click", incluir);
