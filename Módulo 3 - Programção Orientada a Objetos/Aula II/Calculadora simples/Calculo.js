/*
Vocês deverão implementar uma calculadora simples, contendo as 4 operações básicas;

REQUISITOS:

Quando a calculadora for instanciada, deverá receber 3 argumentos (um número qualquer, uma operação a ser realizada e um segundo número);

Vocês precisam validar se os argumentos recebidos são válidos;

A partir disso, demonstram o uso de sua calculadora através do terminal, executando seu script;
*/

class Calculo{
  PrimeiroNumero;
  SegundoNumero;

  
  constructor(primeiroNumero,segundoNumero){

   
   if(typeof primeiroNumero !== "number" || typeof segundoNumero !== "number" ){
      throw new Error("você precisa passar numeros como parametros do método")
    }

    this.PrimeiroNumero = primeiroNumero
    this.SegundoNumero = segundoNumero
  
  }

  somar(){
    return this.PrimeiroNumero + this.SegundoNumero
  }
  subtrair(){
  return this.PrimeiroNumero - this.SegundoNumero
  }

  multiplicar(){
  return this.PrimeiroNumero * this.SegundoNumero
  }
  dividir(){
  if(this.SegundoNumero === 0){
    throw Error("Divisão inválida")
  }
  return Number((this.PrimeiroNumero / this.SegundoNumero).toFixed(3))
  }
}

const calculadora = new Calculo(1,23)
const somar = console.log(`Soma igual a ${calculadora.somar()}`)
const subtracao = console.log(`Subtração igual a ${calculadora.subtrair()}`)
const multiplicacao = console.log(`Multiplicação igual a ${calculadora.multiplicar()}`)
const divisao = console.log(`Divisão igual a ${calculadora.dividir()}`)
