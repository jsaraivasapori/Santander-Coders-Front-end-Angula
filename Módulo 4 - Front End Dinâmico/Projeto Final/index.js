let valorInputs = {}
function main() {
  
    if(sessionStorage.getItem("Dados Recuperados") === null){

      const btn = document.querySelector("#btn-start");
      btn.addEventListener("click", (ev) => {
        ev.preventDefault()
        
        const loginPage = "./index.html"
                
        if(!nameValdiation()){
          return window.location.href = loginPage
        }

        if(!emailValidation()){
        return window.location.href = loginPage
        }

        if(!cepValidation()){
        return window.location.href = loginPage
        }
        sendSessionStorage(valorInputs)
        return window.location.href = "./pages/formQtnPessoas.html";
      });
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
  const regex = /^[0-9]{5}-[0-9]{3}$/

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
      const data = await response.json();
      document.getElementById('endereco').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
  } catch (error) {
      console.error(error);
  }
}




main();