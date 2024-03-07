import { Conta } from "./Conta.js";
import { Pessoa } from "./Pessoa.js";

/*let clientes = []*/


/*function adicionarCliente(titular){
    if (clientes.some((cliente) =>cliente.Titular === "João Vitor")){
         return console.log("Já existe uma conta com esse titular")
        
    }
    const novaConta = new Conta(titular)
    clientes.push({Titular:novaConta.titular, Saldo: novaConta.saldo, Ativa: novaConta.ativa})
    console.log("Abertura da conta realizada com sucesso");

}
*/


const pessoa1 = new Pessoa("João", 24, "000.000.000-00")

const conta1 = new Conta(pessoa1)

const pessoa2 = new Pessoa("Vitor",30,"111.111.111-11")
const conta2 = new Conta(pessoa2)



