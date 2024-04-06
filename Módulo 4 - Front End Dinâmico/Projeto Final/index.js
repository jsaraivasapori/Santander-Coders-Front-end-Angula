function main() {
  
  
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
      return window.location.href = "./pages/teste.html";
    });
  }
  
  


//  Validação nome
function nameValdiation(){
  const name = document.querySelector("#name")
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
 
  sessionStorage.setItem('name', nameField) // salva no session storage o nome validado

  
  return true 
}
// Fim validação nome




// Validação email
function emailValidation(){
  const email = document.querySelector("#email")
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
  
  sessionStorage.setItem('email', emailField) // salva no session storage o eamil validado
 
  return true 
}
// Fim Validação e-mail


// Validação CEP
function cepValidation(){

  const cep = document.querySelector("#cep")
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
  
    sessionStorage.setItem('cep', cepField) // salva no session storage o cep validado
  
  return true 
}
// Fim validação CEP

// Capturação session storage




main();
