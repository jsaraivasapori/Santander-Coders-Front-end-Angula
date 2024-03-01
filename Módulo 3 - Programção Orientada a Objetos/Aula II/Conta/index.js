import { Conta } from "./Conta.js";

let clientes = []


function adicionarCliente(cliente){
    if(clientes.includes(cliente)){
        console.log("Já existe um titular com esse nome");
    }
    const novaConta = new Conta(cliente)
    clientes.push({Titular:novaConta.titular, Saldo: novaConta.saldo, Ativa: novaConta.ativa})
    console.log("Abertura da conta realizada com sucesso");
}

adicionarCliente("João Vitor")
console.log(clientes);