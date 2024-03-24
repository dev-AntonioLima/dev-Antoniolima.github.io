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
  var params = {
    name: 'John',
    reply_email: 'john@example.com',
    message: 'This is awesome!'
    };
    emailjs.send( 'gmail', 'feedback', params );
}