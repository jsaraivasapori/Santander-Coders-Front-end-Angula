/*
    Faça um programa com uma função chamada 'somaImposto'.
    A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa 
    em porcentagem e custo, que é o custo de um item antes do imposto. 
    A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna
    o preço final do item ao consumidor.
*/

function somaImposto(taxaImposto,custo){
  const valorAtual = custo*(1+taxaImposto)/100
  return(console.log(
    `O valor sem a taxa de ${taxaImposto} era ${custo}.Com imposto foi para ${valorAtual}`))
}