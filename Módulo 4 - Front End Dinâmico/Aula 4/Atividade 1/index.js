let id = 1


function adicionarLampadas(){
  
  container = document.querySelector(".container")
  const div = document.createElement("div")
  const img = document.createElement("img")
  const inputText = document.getElementsByName("inputText")[0].value
  const p = document.createElement("p")

  p.innerText = inputText

  img.src = "./img/apagada.jpg"
  img.id = `lamp-${id}`

  div.style.display = "inline-block"
  div.style.textAlign = "center"

  img.addEventListener('click', quebrarLampada)
  img.addEventListener("mouseover", acenderLampada)

  div.append(img,p) // img e p sao irmaos, ou seja, filhos da div
  container.append(div) // div é filha de container
  id ++

  
}

function quebrarLampada(ev){
  ev.target.src = "./img/quebrada.jpg" //refere ao elemento especifico que disparou o evento
  ev.target.removeEventListener("mouseover",acenderLampada)
  
}

function acenderLampada(ev){
  ev.target.src = "./img/acesa.jpg"

}

