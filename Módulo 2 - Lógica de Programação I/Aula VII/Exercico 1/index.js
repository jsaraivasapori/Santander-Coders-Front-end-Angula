/*Função calcula fatorial*/


function calculaFatorial(numero){
  let resultado =1
  if (numero=== 1 || numero === 1){
    console.log(`Fatorial de ${numero} é 1`)
  
  } else {
    for (let i = 1; i <= numero; i++ ){
    resultado *=i  
  }
  }
  return resultado
}

console.log(calculaFatorial(0))