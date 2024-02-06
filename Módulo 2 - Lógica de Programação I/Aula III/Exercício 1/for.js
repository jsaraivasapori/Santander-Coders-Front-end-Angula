/*
  Crie um algoritmo usando o for que leia uma lista.
  Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
  Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

  Lista -> [1,2,3,4,5,6,7,8,9]
  [2, 4, 6, 8] -> pares
  [1, 3, 5, 7, 9] -> impares
*/
let pares = []
let impares = []
const entrada = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(i=0; i<entrada.length; i++){
 if (entrada[i] % 2===0){
  pares.push(entrada[i])
 }else{
  impares.push(entrada[i])
 }
}

console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);