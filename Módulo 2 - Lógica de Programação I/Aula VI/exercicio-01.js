/*
    Faça um programa com uma função chamada 'somaImposto'.
    A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa 
    em porcentagem e custo, que é o custo de um item antes do imposto. 
    A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna
    o preço final do item ao consumidor.
*/

function somaImposto(taxa){
  return function (custo){
    return custo / (1-taxa)
  }
}

console.log(somaImposto(0.92)(1000)) /* 0.92 é parametro de da funçao mae, 1000 é o parametro da funçao interna*/