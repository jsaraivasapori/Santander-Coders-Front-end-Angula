const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];


const media = alunos.map((aluno) =>{
  const novoObjeto = {aluno: aluno.nome , media: aluno.notas.reduce(calculaMedia,0)}
  return novoObjeto
})



function calculaMedia(total,nota,index,notas){
  total+=nota
  if(index === notas.length-1){
    return total/notas.length
  }else{
    return total
  }
}

console.log(media);