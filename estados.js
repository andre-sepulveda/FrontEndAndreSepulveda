import { renderizarTarefas } from "./renderizacao.js";

export function renderizarEstado(estado, dados) {
  const quadro = document.querySelector("[data-quadro]");
  const status = document.querySelector("[role='status']");

  if (estado === "carregando") {
    status.textContent = "Carregando tarefas...";
  }

  if (estado === "sucesso") {
    renderizarTarefas(dados,quadro);
    status.textContent = "Atualizados " + dados.length;
    
  }

  if (estado === "vazio") {
    status.textContent = "Nenhuma tarefa encontrada.";
  }

  if (estado === "erro") {
    status.textContent = dados;}

}