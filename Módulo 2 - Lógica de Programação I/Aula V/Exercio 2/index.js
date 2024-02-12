/*
    Crie uma função chamada 'inverterString' 
    que recebe uma string como parâmetro e retorna a mesma string, mas invertida.
*/

let string = "João"
let array = string.split("")
console.log(array);

const inverted = array.reverse().join("")

console.log(inverted)