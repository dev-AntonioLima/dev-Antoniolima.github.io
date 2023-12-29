function enviarFormulario() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let departamento = document.getElementById('departamento').value;
    let solicitacao = document.getElementById('solicitação').value;

    console.log(nome);
    console.log(email);
    console.log(telefone);
    console.log(departamento);
    console.log(solicitacao);
}

enviarFormulario();