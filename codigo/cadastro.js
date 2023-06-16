function ler() {
    let stringDados = localStorage.getItem('db');
    let objdados = [];

    return objdados;

}

//let objdados = JSON.parse(localStorage.getItem("db"))

function salvar(stringDados) {

    localStorage.setItem('db', JSON.stringify(stringDados));
}


function incluir() {
    let objdados = ler();
    let xnome = document.getElementById("Cemail").value;
    let xsenha = document.getElementById("Csenha").value;
    let xendereco = document.getElementById("Cendereco1").value;
    let xendereco2 = document.getElementById("Cendereco2").value;
    let xtelefone = document.getElementById("Ctelefone").value;
    let xcidade = document.getElementById("Ccidade").value;
    let xestado = document.getElementById("Cestado").value;
    let xcep = document.getElementById("Ccep").value;

    let NovoContato = {
        nome: xnome,
        senha: xsenha,
        endereco: xendereco,
        endereco2: xendereco2,
        telefone: xtelefone,
        cidade: xcidade,
        estado: xestado,
        cep: xcep
    }
    objdados.push(NovoContato);
    salvar(objdados);
    imprime();


}
function imprime() {

    let strhtml = ""
    let objdados = ler();


}
document.getElementById("Botao").addEventListener('click', incluir);



