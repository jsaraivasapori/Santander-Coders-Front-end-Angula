const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const verificaSalario = empregados.some((empregado) => {
  if(empregado.salario >= 1500){
    return true
  }else{
    false
  }
})

console.log(verificaSalario);

const verificaSalarioNovo = empregados.some((empregado) => {
  if(empregado.salario <= 1000){
    return true
  }else{
    false
  }
})
console.log(verificaSalarioNovo);