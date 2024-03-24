import "https://smtpjs.com/v3/smtp.js";
// VALIDAÇÃO CAMPO NOME //
var inputNome = document.querySelector("#nome");
nome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});


// VALIDAÇÃO CAMPO TELEFONE //
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function enviarFormulario() {

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let departamento = document.getElementById('departamento').value;
  let mensagem = document.getElementById('mensagem').value;
  
  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(departamento);
  console.log(mensagem);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "atendimentoservico7@gmail.com",
        Password: "Seguro@2046",
        To: 'antoniol@eng.uerj.br',
        From: "atendimentoservico7@gmail.com",
        Subject: "SAU",
        Body: nome,
    })
        .then(function (message) {
            alert("Mensagem enviada com sucesso")
        });
}

