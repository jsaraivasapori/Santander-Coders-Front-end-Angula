let valorInputs = {}
let cepValido = false
function main() {
  
    if(sessionStorage.getItem("Dados Recuperados") === null){

      const btn = document.querySelector("#btn-start");
      btn.addEventListener("click", (ev) => {
        ev.preventDefault()
        
        const loginPage = "./index.html"
                
        if(!nameValdiation()){
          return 
        }

        if(!emailValidation()){
        return 
        }

        if(!cepValidation()){
        return 
        }        
        sendSessionStorage(valorInputs)
        const cep = getCep().value
        obterEndereco(cep).then(() =>{
          if(cepValido){
           return window.location.href = "./pages/formQtnPessoas.html"
          }
          return
        })
        
        
      
      })
    }
      const recoveryDatas = JSON.parse(window.sessionStorage.getItem("Dados Recuperados"))
      getName().value = recoveryDatas.nome
      getEmail().value = recoveryDatas.email
      getCep().value = recoveryDatas.cep
      
    
}

  
//  Validação nome
function nameValdiation(){
  const name = getName()
  const nameField = name.value.trim()
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]*$/

  if(!nameField){
    alert("Campo nome vazio")
    return false
  }
  if(!regex.test(nameField)){
    alert("Nome inválido")
    return false
  }
 
  // sessionStorage.setItem('name', nameField) // salva no session storage o nome validado

  valorInputs.nome = nameField
  return true 
}
// Fim validação nome


// Validação email
function emailValidation(){
  const email = getEmail()
  const emailField = email.value
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!emailField){
    alert("Campo email vazio")
    return false
  }
  if(!regex.test(emailField)){
    alert("E-mail inválido")
    return false
  }
  
  // sessionStorage.setItem('email', emailField) // salva no session storage o eamil validado
 valorInputs.email = emailField
  return true 
}
// Fim Validação e-mail


// Validação CEP
function cepValidation(){

  const cep = getCep()
  const cepField = cep.value.trim()
  const regex = /^\d{8}$/

  if(!cepField){
    alert("Campo CEP vazio")
    return false
  }
  if(!regex.test(cepField)){
    alert("Cep inválido")
    return false
  }
  
    // sessionStorage.setItem('cep', cepField) // salva no session storage o cep validado
  valorInputs.cep = cepField
  return true 
}
// Fim 


//Pega nome
function getName(){
  return document.querySelector("#name")
}
// Fim

// Pega e-mail

function getEmail(){
  return document.querySelector("#email")
}
// Fim

function getCep(){
  return document.querySelector("#cep")
}
// Envio session storage

function sendSessionStorage(valorInputs){
  
  dadosRecuperados = {nome: valorInputs.nome, email:valorInputs.email, cep: valorInputs.cep}
  dadosRecuperadosString = JSON.stringify(dadosRecuperados)
  window.sessionStorage.setItem("Dados Recuperados",dadosRecuperadosString)
}

async function obterEndereco(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.erro) {
      throw new Error('CEP inválido');
    }
    cepValido = true
    console.log(data.logradouro) ;
    console.log(data.bairro) ;
    console.log(data.localidade) ;
    console.log(data.uf);
    console.log(cepValido);
  } catch (error) {
    console.error('Um erro ocorreu:', error);
  }
}





main();
