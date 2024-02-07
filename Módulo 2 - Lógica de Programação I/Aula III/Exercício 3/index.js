/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

const prompt = require('prompt-sync')();

const entry = prompt("Informe seu bilhete separados por vírgula.:")
let arr=entry.split(",").sort()
let bilhetePremiado = []

for (let i = 0; i<6; i++){
    
    bilhetePremiado.push(Math.round(Math.random()*10))
}

if(arr.length != bilhetePremiado.length){
    console.log("Informe os 6 números do seu bilhete");
}
else{
    for(let index = 0; index < arr.length; index++){
        if(arr[1]!== bilhetePremiado){
            console.log("Não premiado")
            break
        }
    }
    console.log("Bilhete Premiado")

    
}
