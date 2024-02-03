/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salario = parseInt(1550)

if(salario<= 1500){
  let percentual= 20
  console.log(
    `Salário antes do reajuste: ${salario}
     Percentual do aumento: ${percentual}%
     Valor aumentado: ${salario*0.2}
     Novo salário: ${salario*1.2}
    `);
}
else if(salario<=1700 && salario>1500){
  let percentual= 15
  console.log(
    `Salário antes do reajuste: ${salario}
     Percentual do aumento: ${percentual}%
     Valor aumentado: ${salario*0.15}
     Novo salário: ${salario*1.15}`
     );
}
else if(salario<=2000 && salario>1700){
  let percentual= 10
  console.log(
    `Salário antes do reajuste: ${salario}
     Percentual do aumento: ${percentual}%
     Valor aumentado: ${salario*0.10}
     Novo salário: ${salario*1.10}
    `);
}
else if(salario>2000){
  let percentual= 5
  console.log(
    `Salário antes do reajuste: ${salario}
     Percentual do aumento: ${percentual}%
     Valor aumentado: ${salario*0.05}
     Novo salário: ${salario*1.05}
    `);
}else{
  console.log("Valor inválido");
}