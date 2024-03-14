
import promptSync from 'prompt-sync';
const prompt = promptSync()
class JogoAdvinhacao{
    
    constructor() {
    }

    gerarNumeroAleatorio():number{
        const numeroAleatorio:number =Math.round((Math.random()*11)+1)
        return numeroAleatorio
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
        const palpite = Number(prompt("Informe um número entre 0 a 10.: "))
        return palpite
    }
 
          
    

    // inicar():void{
    //     do{
    //         this.mostrarMenu()
    //         const escolha = this.solicitarPalpite()

    //         if (isNaN(escolha)) {
    //             continue;
    //           }
    //           if (escolha < 0 || escolha > 2) {
    //             continue;
    //           }
    //         }while (escolha === null){

    //           if (escolha == 2) {
    //             return;
    //           }
          
    //           switch (escolha) {
    //             case 1:
    //               this.verificaPalpite(escolha)
    //               break;
    //           }
                
    //         }
          
    //           prompt('Aperte enter para continuar');
        
    // }
}