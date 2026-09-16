import { carregarTarefas } from "./api.js";
import { renderizarEstado } from "./estados.js";
import { derivarListaVisivel } from "./derivacao.js";
import { renderizarTarefas } from "./renderizacao.js";

async function iniciar() {
  renderizarEstado("carregando", null);

  try {
    const tarefas = await carregarTarefas();

    if (tarefas.length === 0) {
      renderizarEstado("vazio",tarefas);
    } else {
      estado.tarefas = tarefas;
      estado.carregando = false;
      atualizarTela();
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

const estado = {
  tarefas: [],
  busca: "",
  status: "todos",
  prioridade: "todas",
  ordenacao: "crescente",
  carregando: true,
  erro: null,
};
const quadro = document.querySelector("[data-quadro]");
const regiaoStatus = document.querySelector("[role='status']");
const campoBusca = document.querySelector("#pesquisar-titulo");



iniciar();


function atualizarTela() {
  const lista = derivarListaVisivel(estado);
  renderizarTarefas(lista, quadro);

  if (lista.length === 0) {
    regiaoStatus.textContent = "Nenhum resultado. Altere ou limpe os critérios.";
  } else {
    regiaoStatus.textContent = lista.length + " de " + estado.tarefas.length + " tarefas";
  }
}

campoBusca.addEventListener("input", (evento) => {
  estado.busca = evento.currentTarget.value;
  atualizarTela();
});


document.querySelectorAll('input[name="status"]').forEach((radio) => {
  radio.addEventListener("change", (evento) => {
    estado.status = evento.currentTarget.id;
    atualizarTela();
  });
});

document.querySelectorAll('input[name="prioridade"]').forEach((radio) => {
  radio.addEventListener("change", (evento) => {
    estado.prioridade = evento.currentTarget.id;
    atualizarTela();
  });
});

document.querySelector("#limpar-filtros").addEventListener("click", () => {
  estado.busca = "";
  estado.status = "todos";
  estado.prioridade = "todas";

  campoBusca.value = "";
  document.querySelector('input[name="status"]#todos').checked = true;
  document.querySelector('input[name="prioridade"]#todas').checked = true;

  atualizarTela();
});