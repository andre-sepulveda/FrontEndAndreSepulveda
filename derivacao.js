const estado = {
  tarefas: [],
  busca: "",
  status: "todos",
  prioridade: "todas",
  ordenacao: "crescente",
  carregando: true,
  erro: null,
};

export  function filtrarPorBusca(tarefas,busca){
 return tarefas.filter((item) => item.titulo.toLowerCase().includes(busca.toLowerCase()))
}

export function filtrarPorStatus(tarefas,status){
    return tarefas.filter((item) => item.status.toLowerCase()===status.toLowerCase()||status.toLowerCase()==="todos")

}

export function filtrarPorPrioridade(tarefas,prioridade){
    return tarefas.filter((item)=>item.prioridade.toLowerCase()===prioridade.toLowerCase()||prioridade.toLowerCase()==="todas")
}

export function ordenarPorPrazo(tarefas){
    const copia = [...tarefas];
    copia.sort((a,b)=> a.prazo.localeCompare(b.prazo));
    return copia;
}

export function derivarListaVisivel(estado) {
  let resultado = estado.tarefas;
  resultado = filtrarPorBusca(resultado, estado.busca);
  resultado = filtrarPorStatus(resultado, estado.status);
  resultado = filtrarPorPrioridade(resultado, estado.prioridade);
  resultado = ordenarPorPrazo(resultado);
  return resultado;
}