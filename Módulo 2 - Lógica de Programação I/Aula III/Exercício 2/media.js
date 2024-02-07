/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos), que contém nome, nota1 e nota2. 
    Use o for para percorer esse array e calcular a média das duas notas de cada aluno. Ao final, imprimir o nome do aluno e a sua média
  precisa aceitar n notas, nao necessariamente todos com a mesma quantidade de notas

    */

const listaDeAlunos = [
  { nome: "João", notas: [8, 7,10] },
  { nome: "Maria", notas: [9, 8,10] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];



for (let aluno in listaDeAlunos){
  let indiceNotas = 0
  let somaNotas = 0
  while(indiceNotas< listaDeAlunos[aluno].notas.length){
    somaNotas +=listaDeAlunos[aluno].notas[indiceNotas]
    mediaAluno = Math.round(somaNotas/listaDeAlunos[aluno].notas.length)
    indiceNotas++

  }
  // console.log(`${listaDeAlunos[aluno].nome}, somatorio ${somaNotas}`)
  console.log(`${listaDeAlunos[aluno].nome} teve média de ${mediaAluno}`)
  // console.log(somaNotas)
  // console.log(mediaAluno);
}
