export async function carregarTarefas() {
  try {
    const resposta = await fetch("./dados.json");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar dados: status " + resposta.status);
    }

    const dados = await resposta.json();
    return dados.tarefas;

  } catch (erro) {
    throw erro;
  }
}