/*
    Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

function calculadora(operacao){
  if (operacao === "soma"){
    return  (valor1,valor2) =>{
      return valor1+valor2
    }
  }
  else if(operacao === "subtracao"){
    return  (valor1,valor2) =>{
      return valor1 - valor2
    }
  }else if (operacao === "multiplicacao"){
    return  (valor1,valor2) =>{
      return valor1 * valor2
    }
  }else if(operacao === "divisao"){
    return  (valor1,valor2) =>{
      return valor1 / valor2
    }
  }
}

console.log(calculadora("soma")(1,2))
console.log(calculadora("subtracao")(1,2))
console.log(calculadora("multiplicacao")(1,2))
console.log(calculadora("divisao")(1,2))