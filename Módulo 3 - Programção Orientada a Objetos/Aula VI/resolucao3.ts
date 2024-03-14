
import promptSync from 'prompt-sync';
const prompt = promptSync()

class JogoAdvinhacao{
    
    constructor() {
    }

    gerarNumeroAleatorio():number{
        return Math.round((Math.random()*11)+1)
        
    }

    verificaPalpite(valor:number):boolean{
        if(valor < this.gerarNumeroAleatorio()){
            console.log("Palpite abaixo do número premiado");
            return false
        }
        if(valor > this.gerarNumeroAleatorio()){
            console.log("Palpite a cima do número premiado")
            return false
        }
        
        console.log("Parabéns você acertou!")
        return true
        
    } 

    mostrarMenu(): void{
        console.log(`
        1 - Chutar um número
        2- Sair
        `)
    }

    solicitarPalpite(): number{
        const palpite = Number(prompt("Informe um número de  0 a 10.: "))
        return palpite
    }
    
    solicitarOpcao(): number {
        const opcao = Number(prompt("Escolha uma opção: "));
        return opcao;
    }
          
    

    inicar():void{
       
        let opcao: number;
        let acertou = false;
        do {
            this.mostrarMenu();
            opcao = this.solicitarOpcao();
            if (opcao === 1) {
                const palpite = this.solicitarPalpite();
                acertou = this.verificaPalpite(palpite);
            }
        } while (opcao !== 2 && !acertou);
    }
        
    }

const jogo = new JogoAdvinhacao();
jogo.inicar()