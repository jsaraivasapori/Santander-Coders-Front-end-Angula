/*
    Crie um algoritmo que receba os três lados de um triângulo e imprime "Equilátero" se todos os lados forem iguais, 
    "Isósceles" se dois lados forem iguais, ou "Escaleno" se todos os lados forem diferentes.
*/

const a = 4
const b = 5
const c =3

if (a===b && b===c){
console.log("Equilátero");
}else if (a!==b && b !== c && c !== a){
  console.log("Escaleno");
}else{
  console.log("Isóceles");
}