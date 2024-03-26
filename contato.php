$destinatario = "antoniol@eng.uerj.br";

$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$departamento = $_REQUEST['departamento'];
$mensagem = $_REQUEST['mensagem'];



$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";


mail($destinatario, $assunto , $body, "From: $email\r\n");

?>