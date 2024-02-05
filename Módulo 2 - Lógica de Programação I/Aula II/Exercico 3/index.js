
/* 
    Crie um jogo de adivinhação em que o programa gera um número aleatório entre 1 e 100 e o jogador tenta adivinhar o número. 
    O jogo deve dar dicas ao jogador, informando se o número é maior ou menor do que a tentativa atual. 
    O jogador deve continuar a adivinhar até acertar o número. No final, deverá informar a quantidade de tentativas.
*/


const number = Math.floor(Math.random() *100)
const prompt = require('prompt-sync')();
let tryies = 0

console.log(number);


while(entry!==number){

    let entry = parseInt(prompt('Chute um número entre 0 e 100.: '));
    if(entry===number){
        console.log(`Você acertou com ${tryies} tentativas(a). O número era ${number}`);
    }
    else if(entry < number){
        tryies++
        console.log("Você errou, chutou a baixo do valor");
        let entry = parseInt(prompt('Chute um número entre 0 e 100.: '));

    }
    else if(entry> number){
        tryies++
        console.log("Você errou, chutou a cima do valor");
        let entry = parseInt(prompt('Chute um número entre 0 e 100.: '));

    }else{
        console.log("Entre somente com números de 0 a 100")
    }
}
