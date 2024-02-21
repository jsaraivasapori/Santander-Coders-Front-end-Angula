import {dadosCliente} from './dados.js'; 
import { enviarEmail } from './envia-email.js';
import {obterDiaSemana} from './diaSemana.js'; 
import {criarCorpoEmail} from './criarCorpoEmail.js'

function verificaDecisaoComunicacao(dadosCliente){
    return dadosCliente.filter((cliente)=>{return cliente.receberEmail === true} )
}
const clientesVerificados = verificaDecisaoComunicacao(dadosCliente)

function disparoDeEmail(clientesVerificados){
 clientesVerificados.forEach(cliente => {
    let nome = cliente.cliente
    let email = cliente.email
    return enviarEmail(email,nome,criarCorpoEmail(nome))
 });
}
    
const data = new Date()
const diaSemana = obterDiaSemana(data)

if(diaSemana === "Segunda"){

    disparoDeEmail(clientesVerificados)

    if(statuss === "Error" && message ==="O campo de assunto não deveria estar vazio ao enviar um e-mail."){
            console.log("O campo de assunto não deveria estar vazio ao enviar um e-mail. Insira o assunto")
        } 
    else if(statuss === "Error" && message === "O corpo da mensagem precisa ser fornecido ao enviar um e-mail."){
            console.log("O corpo da mensagem precisa ser fornecido ao enviar um e-mail. Insira o conteúdo do email");
        }
    console.log("Emails enviados com sucesso")

 }else{
    console.log(`Os emails são disparados toda **Segunda** e hoje ainda é ${diaSemana}. Aguarde até a próxima data`);
 }


