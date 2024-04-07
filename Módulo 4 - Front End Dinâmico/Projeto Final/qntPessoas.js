let qntHomens = 0;
let qntMulheres = 0;
let qntCriancas = 0;

function main(){
  capturaInputs();
  const btnCalcular = document.querySelector("#calcular")
  btnCalcular.addEventListener("click",()=>{
    if(!verificaCampos(qntHomens,qntMulheres,qntCriancas)){
      console.error("campos vazios")
      return window.location.href = "#"
   }
   obj = retornaObjtChurras(qntHomens,qntMulheres,qntCriancas)
   return renderizarTabela(obj)
  })
}

// Funçoes captura inputs live
function capturaInputs(){
  const spanH = document.querySelector("#homens-qnt")
  const spanM = document.querySelector("#mulheres-qnt")
  const spanC = document.querySelector("#criancas-qnt")
  document.querySelector("#homens").addEventListener("input", (ev)=>{
    qntHomens = ev.target.value;
    spanH.innerText = `${qntHomens} homens`
  });
  document.querySelector("#mulheres").addEventListener("input", (ev)=>{
    qntMulheres = ev.target.value;
    spanM.innerText = `${qntMulheres} mulheres`
  });
  document.querySelector("#criancas").addEventListener("input", (ev)=>{
    qntCriancas = ev.target.value;
    spanC.innerText = `${qntCriancas} crianças`
  });
}


//FunçãoverificaCamos

function verificaCampos(homens,mulheres,criancas){
  if(homens == 0 && mulheres == 0 && criancas == 0){
    return false
  }
  true
}

//Função retorna objeto dos itens churrasco
function retornaObjtChurras(homens,mulheres,criancas){
  adultos = homens + mulheres
  pessoas = adultos + criancas

  objetoChurras = 
  {
    carne: calcularCarne(adultos, criancas),
    Pao: calcularPaoAlho(adultos, criancas),
    Carvao: calcularCarvao(pessoas),
    Sal: calcularSal(pessoas),
    Refrigerante: calcularRefrigerante(criancas),
    Agua: calcularAgua(pessoas),
    Cerveja: calcularCerveja(adultos)
  }
  return objetoChurras
}
//Fim

// Funções de calculo de itens churrasco
function calcularCarne(adultos,crianca){
  return {adulto: 0.5*adultos, crianca: 0.3*crianca }
}
function calcularPaoAlho (adulto,crianca){
  return{adulto: 5*adulto, crinaca: 2*crianca} //unidade: unidade
}

function calcularCarvao(pessoas){
  return {carvao:pessoas} //unidade: Kg
}

function calcularSal(pessoas){
  return {sal: 0.1*pessoas} //unidade:Kg
}

function calcularRefrigerante(crianca){
  return {refrigerante: 1.5*crianca} //unidade: litro
}

function calcularAgua(pessoas){
  return {agua: pessoas} //unidade garrafa 2 litros
}

function calcularCerveja(adultos){
  return {cerveja: 6*adultos} // unidade garrafa 600 ml
}
// Fim

main()