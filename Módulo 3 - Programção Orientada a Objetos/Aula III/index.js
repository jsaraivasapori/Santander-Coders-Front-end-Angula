import { Conta } from "./Conta.js";

let clientes = []


function adicionarCliente(titular){
    if (clientes.some((cliente) =>cliente.Titular === "João Vitor")){
         return console.log("Já existe uma conta com esse titular")
        
    }
    const novaConta = new Conta(titular)
    clientes.push({Titular:novaConta.titular, Saldo: novaConta.saldo, Ativa: novaConta.ativa})
    console.log("Abertura da conta realizada com sucesso");

}


adicionarCliente("João Vitor")

console.log(clientes);

