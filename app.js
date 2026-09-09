import { tarefas } from "./dados.js";
import { renderizarTarefas } from "./renderizacao.js";

const quadro = document.querySelector("[data-quadro]");
renderizarTarefas(tarefas, quadro);