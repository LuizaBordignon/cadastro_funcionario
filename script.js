const form = document.getElementById('cadastro-funcionario');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const dataNascimento = document.getElementById('idade').value;
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

  const sexo = sexoSelecionado ? sexoSelecionado.value : null;

  if (!nome || !dataNascimento || !sexo) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  console.log("Dados do funcionário:");
  console.log("Nome:", nome);
  console.log("Data de nascimento:", dataNascimento);
  console.log("Sexo:", sexo);

  alert("Cadastro realizado com sucesso!");
});