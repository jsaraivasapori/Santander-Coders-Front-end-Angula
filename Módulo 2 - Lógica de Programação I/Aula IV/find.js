const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

const find10Max = lugares.find((lugar) =>{
  return lugar.capacidade === 8
   
})

const find25Max =lugares.find((lugar) =>{
  return lugar.capacidade === 28
})

const find40Max =lugares.find((lugar) =>{
  return lugar.capacidade === 40
})


function tratamentoRetorno(busca){
  if(busca != undefined && !null ){
    console.log("Encontrado");
    console.log(JSON.stringify(busca, null, 2));
   
  }else{
    console.log("Não encontrado");
  }
}
tratamentoRetorno(find10Max)
tratamentoRetorno(find25Max)
tratamentoRetorno(find40Max)
