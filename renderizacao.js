export function criarCartao(tarefa) {
  const cartao = document.createElement("article");
  cartao.className = "article";

  const titulo = document.createElement("h3");
  titulo.className = "titulo-tarefa";
  titulo.textContent = tarefa.titulo;
  const prazo=document.createElement("p");
  prazo.className="prazo";
  prazo.textContent="Prazo: "+ tarefa.prazo;
  const prioridade=document.createElement("p");
  prioridade.className="prioridade";
  prioridade.textContent="Prioridade: " + tarefa.prioridade;

  cartao.append(titulo,prioridade,prazo);
  return cartao;
}


export function renderizarTarefas(tarefas, quadro) {
  const listas = quadro.querySelectorAll("[data-lista-status]");
  listas.forEach((lista) => {
    const status = lista.dataset.listaStatus;
    const tarefasDoStatus = tarefas.filter((tarefa) => tarefa.status === status);
    const itens = tarefasDoStatus.map((tarefa) => {
      const li = document.createElement("li");
      li.append(criarCartao(tarefa));
      return li;
    });
    lista.replaceChildren(...itens);
  });
}