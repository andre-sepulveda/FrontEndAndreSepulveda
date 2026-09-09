import { carregarTarefas } from "./api.js";
import { renderizarEstado } from "./estados.js";

async function iniciar() {
  renderizarEstado("carregando", null);

  try {
    const tarefas = await carregarTarefas();

    if (tarefas.length === 0) {
      renderizarEstado("vazio",tarefas);
    } else {
      renderizarEstado("sucesso",tarefas);
    }

  } catch (erro) {
    let mensagem;

    if (erro.name === "TypeError") {
      mensagem = "Erro de conexão. Verifique sua internet.";
    } else if (erro.name === "SyntaxError") {
      mensagem = "Erro ao interpretar os dados recebidos.";
    } else {
      mensagem = "Erro ao carregar tarefas: " + erro.message;
    }

    renderizarEstado("erro", mensagem);
  }
}

iniciar();

const estado = {
  tarefas: [],
  busca: "",
  status: "todos",
  prioridade: "todas",
  ordenacao: "crescente",
  carregando: true,
  erro: null,
};