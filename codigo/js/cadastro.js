let dadosObject = [];
function salvar() {
  localStorage.setItem("Cadastro", JSON.stringify(dadosObject));
}
function incluir() {
  //let objdados = ler();
  let xnome = document.getElementById("Cemail").value;
  let xsenha = document.getElementById("Csenha").value;
  let xendereco = document.getElementById("Cendereco1").value;
  let xnumendereco1 = document.getElementById("CnumeroCasa1").value;
  let xendereco2 = document.getElementById("Cendereco2").value;
  let xnumendereco2 = document.getElementById("CnumeroCasa2").value;
  let xtelefone = document.getElementById("Ctelefone").value;
  let xcidade = document.getElementById("Ccidade").value;
  let xestado = document.getElementById("Cestado").value;
  let xcep = document.getElementById("Ccep").value;

  let NovoContato = {
    email: xnome,
    senha: xsenha,
    endereco: xendereco,
    numeroendereco1: xnumendereco1,
    endereco2: xendereco2,
    numeroendereco2: xnumendereco2,
    telefone: xtelefone,
    cidade: xcidade,
    estado: xestado,
    cep: xcep,
  };

  dadosObject.push(NovoContato);
  salvar();
}
document.getElementById("Botao").addEventListener("click", incluir);
function imprime() {
  let strhtml = "";
  let objdados = ler();
}
document.getElementById("Botao").addEventListener("click", incluir);
