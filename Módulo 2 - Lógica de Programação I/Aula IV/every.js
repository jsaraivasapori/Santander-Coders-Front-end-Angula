var pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

console.log(pessoas.every((pessoa) =>{
  return pessoa.idade >= 18
 
})); 

console.log(pessoas.every((pessoa) =>{
  pessoa.nome.length > 3
}));

log pessoas.every((pessoa) =>{
  return pessoa.nome && pessoa.idade != undefined
 
})