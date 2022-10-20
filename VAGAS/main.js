
const vagas = []

function listar_vagas() {
  const vagas_texto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice+1 + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagas_texto);
}

function criar_vaga() {
  const nome = prompt("Qual o nome da vaga?");
  const descricao = prompt("Descrição da vaga:");
  const data = prompt("Qual a data limite? (dd/mm/aa)");

  let confirma = confirm(
    `Confirma os dados?\n
    Nome:${nome}\n
    Descrição:${descricao}\n
    Data limite: ${data}`);

  if (confirma) {
    const novaVaga = { nome, descricao, data, candidatos: [] };

    vagas.push(novaVaga);
    alert("Vaga criada!")
  }
}

function visualizar_vaga() {
  const indice = prompt("Qual o numero da vaga?");

  if (indice >= vaga.length || indice < 0 ){
    alert('Indice invalido.')
    return 
  }

  const vaga = vagas[indice];

  const candidatos_texto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

  alert(
    "vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescriçâo: " + vaga.descricao +
    "\nDAta limite: " + vaga.data +
    "\nQuantidade de candidatos: " + vaga.candidatos.lenght+
    "\nCandidatos inscritos: "+ candidatos_texto
  );
}

function inscrever() {
  const candidato = prompt("Qual o nome do candidato?");
  const indice = prompt("Qual o numero da vaga?");
  const vaga = vagas[indice];

  let confirma = confirm(
    `Inscrever candidato ${candidato} na vaga ${indice}(${vaga.nome})?\n`
  );

  if (confirma) {
    vaga.candidatos.push(candidato);
    alert("Candidato Inscrito!");
  }
}

function excluir_vaga() {
  const indice = prompt("Qual o número da vaga?");
  const vaga = vagas[indice];

  const confirma = confirm(`Excluir vaga ${indice}(${vaga.nome})?`);

  if (confirma) {
    vaga.splice(indice, 1);
    alert("Vaga excluida.");
  }
}

function exibir_menu() {
  const opcao = prompt(
    "O que deseja?\n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar uma nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um(a) candidato(a) em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair\n"
  );

  return opcao;
}

function executar(){
  let opcao = ''
  do{
    opcao = exibir_menu()

    switch (opcao) {
      case "1":
        listar_vagas();
        break
  
      case "2":
        criar_vaga();
        break
  
      case "3":
        visualizar_vaga();
        break
  
      case "4":
        inscrever();
        break
  
      case "5":
        excluir_vaga();
        break
  
      case "6":
        alert("Saindo...");
        break

      default:
        alert('Opção invalida.')
    }
  }while(opcao != '6')

}

executar()