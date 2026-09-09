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