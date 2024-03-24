function gerarNumeroEntreUmESessenta() {
  return Math.floor(Math.random() * 60) + 1;
}

function gerarNumerosMega(){
  let numeros = []
  let numerogerado 
  
  while( numeros.length < 6){

    numerogerado = gerarNumeroEntreUmESessenta()

    if(!numeros.includes(numerogerado)){
      numeros.push(numerogerado)
    }
   
  }
  return numeros
}

function mostrarSorteio(){
  numeros = gerarNumerosMega()
  elSpan = document.getElementsByName("Resultado")[0]
  elB =document.createElement("b")
  elB.innerText= `${numeros[0]} - ${numeros[1]} - ${numeros[2]} - ${numeros[3]} - ${numeros[4]} - ${numeros[5]}`
  elSpan.appendChild(elB)

  verificarApostaGanhadora()

}

function capturaBilheteAposta(){

  let inputElements = document.getElementsByName("input-numero")
  let valores = []

  for(let i = 0; i< inputElements.length; i++){
    valores.push(Number(inputElements[i].value))
  }
  
  return valores

}


function verificarApostaGanhadora(){

  numeros = gerarNumerosMega()
  valores = capturaBilheteAposta()
  
  if(valores.every(valor => numeros.includes(valor))){
   alert("Voce Ganhou")
    

  }
  else {
    alert("Tente Novamente")
  }
  
}