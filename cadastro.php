<?php
$host = "localhost";
$usuario = "root";
$senha = ""; 
$banco = "cadastro_func";

$conn = new mysqli($host, $usuario, $senha, $banco);

$nome = $_POST['nome'];
$data_nascimento = $_POST['idade'];
$sexo = $_POST['sexo'];

$sql = "INSERT INTO funcionarios (nome, data_nascimento, sexo)
        VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $data_nascimento, $sexo);

if ($stmt->execute()) {
    echo "Funcionário cadastrado com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

$conn->close();
?>