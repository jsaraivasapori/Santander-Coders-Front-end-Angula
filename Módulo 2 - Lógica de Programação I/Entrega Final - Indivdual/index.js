import {dadosCliente} from './dados.js'; 
import { enviarEmail } from './envia-email.js';
import {obterDiaSemana} from './diaSemana.js'; 
import {criarCorpoEmail} from './criarCorpoEmail.js'


function verificaDecisaoComunicacao(dadosCliente){
    return dadosCliente.filter((cliente)=>{return cliente.receberEmail === true} )
}

function disparoDeEmail(clientesVerificados){
    clientesVerificados.forEach(cliente => {
       let nome = cliente.cliente
       let email = cliente.email
       let retorno = enviarEmail(email,nome,criarCorpoEmail(nome))
       if(retorno.statuss === "Error"){
           console.log(retorno.message);
       }
       else{
           console.log(retorno.message)
       }
    });
   }



const clientesVerificados = verificaDecisaoComunicacao(dadosCliente)
const data = new Date()
const diaSemana = obterDiaSemana(data)

if (diaSemana === "Segunda"){
    disparoDeEmail(clientesVerificados)
}else{
    console.log(`Os emails são disparados toda **Segunda** e hoje ainda é ${diaSemana}. Aguarde até a próxima data`);
}


