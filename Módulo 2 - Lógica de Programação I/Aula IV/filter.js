const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const filtradoMaiorIdade = alunos.filter((aluno) => {
  return aluno.idade >= 18
})

console.log(filtradoMaiorIdade);

const filtradoRange = alunos.filter((aluno) =>{
  return aluno.idade < 20
})

console.log(filtradoRange)

const filtradoLetterJ = alunos.filter((aluno) =>{
  return aluno.nome.at(0) === "J" | "j"
})

console.log(filtradoLetterJ);