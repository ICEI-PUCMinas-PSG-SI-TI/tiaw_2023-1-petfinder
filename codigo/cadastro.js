let dadosObject = [];
function salvar() {
  localStorage.setItem("Cadastro", JSON.stringify(dadosObject));
}
function incluir() {
  //let objdados = ler();
  let xnome = document.getElementById("Cemail").value;
  let xsenha = document.getElementById("Csenha").value;
  let xendereco = document.getElementById("Cendereco1").value;
  let xendereco2 = document.getElementById("Cendereco2").value;
  let xtelefone = document.getElementById("Ctelefone").value;
  let xcidade = document.getElementById("Ccidade").value;
  let xestado = document.getElementById("Cestado").value;
  let xcep = document.getElementById("Ccep").value;

  let NovoContato = {
    email: xnome,
    senha: xsenha,
    endereco: xendereco,
    endereco2: xendereco2,
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
