let qntHomens = 0;
let qntMulheres = 0;
let qntCriancas = 0;
let acionado = false
function main(){
  capturaInputs();
  const btnCalcular = document.querySelector("#calcular")
  btnCalcular.addEventListener("click",()=>{
    if(!verificaCampos(qntHomens,qntMulheres,qntCriancas)){
      console.error("campos vazios")
      return window.location.href = "#"
   }
   obj = retornaObjtChurras(qntHomens,qntMulheres,qntCriancas)
   console.log('Deu certo')
   displayHide()
   renderizarTabela(obj)
   renderizarBtnNovoCalculo()
   
  })
}
function displayHide(){
  const divControle = document.querySelector("div.control")
  const divResultado = document.querySelector("div.resultado")
  if(divControle.classList.contains("hide") && !divResultado.classList.contains("hide")){
    divControle.classList.remove("hide")
    divResultado.classList.add("hide")
    return
  }
  divControle.classList.add("hide")
  divResultado.classList.remove("hide")
  return
}
function renderizarBtnNovoCalculo(){
  const divCard = document.querySelector("div.card")
  const btnNovoCalculo = document.createElement("btn")
  btnNovoCalculo.classList.add("btn")
  btnNovoCalculo.classList.add("btn-centralization")
  btnNovoCalculo.innerText="Refazer"
  divCard.append(btnNovoCalculo)

  divCard.addEventListener("click", displayHide())
}
//Função renderizarTabela

function renderizarTabela(listaChurras) {
  const card = document.querySelector("div.card")
  const div = document.createElement("div")
  const table= document.createElement("table")
  table.innerHTML = 
  '<table>' +
     '<tr><th>Item</th><th>Quantidade para Adultos</th><th>Quantidade para Crianças</th><th>Quantidade Total</th></tr>' +
     '<tr><td>Carne</td><td>' + listaChurras.carne.adulto.toFixed(0) + ' kg</td><td>' + listaChurras.carne.crianca.toFixed(0) + ' kg</td><td>' + (listaChurras.carne.adulto + listaChurras.carne.crianca).toFixed(0) + ' kg</td></tr>' +
     '<tr><td>Pão de Alho</td><td>' + listaChurras.Pao.adulto.toFixed(0) + ' unidades</td><td>' + listaChurras.Pao.crianca.toFixed(0) + ' unidades</td><td>' + (listaChurras.Pao.adulto + listaChurras.Pao.crianca).toFixed(0) + ' unidades</td></tr>' +
     '<tr><td>Carvão</td><td>-</td><td>-</td><td>' + listaChurras.Carvao.carvao.toFixed(0) + ' kg</td></tr>' +
     '<tr><td>Sal</td><td>-</td><td>-</td><td>' + listaChurras.Sal.sal.toFixed(0) + ' kg</td></tr>' +
     '<tr><td>Refrigerante</td><td>-</td><td>-</td><td>' + listaChurras.Refrigerante.refrigerante.toFixed(0) + ' litros</td></tr>' +
     '<tr><td>Água</td><td>-</td><td>-</td><td>' + listaChurras.Agua.agua.toFixed(0) + ' garrafas de 2 litros</td></tr>' +
     '<tr><td>Cerveja</td><td>' + listaChurras.Cerveja.cerveja.toFixed(0) + ' garrafas de 600 ml</td><td>-</td><td>' + listaChurras.Cerveja.cerveja.toFixed(0) + ' garrafas de 600 ml</td></tr>' +
 '</table>';

  div.classList.add ("table-container")
  div.append(table)
  card.append(div)
  
}





// Funçoes captura inputs live
function capturaInputs(){
  const spanH = document.querySelector("#homens-qnt")
  const spanM = document.querySelector("#mulheres-qnt")
  const spanC = document.querySelector("#criancas-qnt")
  document.querySelector("#homens").addEventListener("input", (ev)=>{
    qntHomens = parseFloat(ev.target.value);
    spanH.innerText = `${qntHomens}`
  });
  document.querySelector("#mulheres").addEventListener("input", (ev)=>{
    qntMulheres = parseFloat(ev.target.value);
    spanM.innerText = `${qntMulheres} `
  });
  document.querySelector("#criancas").addEventListener("input", (ev)=>{
    qntCriancas = parseFloat(ev.target.value);
    spanC.innerText = `${qntCriancas}`
  });
}
//Fim

//FunçãoverificaCamos

function verificaCampos(homens,mulheres,criancas){
  if(homens == 0 && mulheres == 0 && criancas == 0){
    return false
  }
  return true
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
  return{adulto: 3*adulto, crianca: 2*crianca} //unidade: unidade
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
  return {agua: 0.5*pessoas} //unidade garrafa 2 litros
}

function calcularCerveja(adultos){
  return {cerveja: 6*adultos} // unidade garrafa 600 ml
}
// Fim

main()