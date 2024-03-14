class Carro{
   private _marca: string
   private _modelo: string
   private _estado: boolean
   private _velocidadeAual:number

    constructor(marca:string, modelo:string){
        this._marca = marca
        this._modelo = modelo
        this._estado = false
        this._velocidadeAual = 0

    }

    get marca() : string{
        return this._marca
    }

    get modelo() : string{
        return this._modelo
    }

    get estado() : boolean{
        return this._estado
    }

    get velocidadeAtual() : number{
        return this._velocidadeAual
    }
    set velocidadeAtual(novaVelocidade:number){
        this._velocidadeAual = novaVelocidade
    }

   

    mudarEstado(acao:boolean):boolean | undefined{

        if (this.velocidadeAtual > 0){
            console.log("Por medida de segurança, impossivel desligar o veíulo com ele movimento");
            
            return false
        }
        this._estado = acao

        if(this.estado === true){
            return true
        }
        if(this.estado === false){
            return false
        }

    }
    acelerar(velociadeFinal:number):number | undefined{
        if(this.estado){
        return this.velocidadeAtual += velociadeFinal
        }

        console.error("Impossível acelerar, pois o carro está desligado (estado === false)");
    }

    freiar(valor:number):number | undefined{
        if(this.estado){
            return this._velocidadeAual -= valor
        }

        console.error("Impossivel freiar, pois o carro está desligado (estado === false)")
    }

    exibirVelocidadeAtual():void{
       console.log(this._velocidadeAual)
    }
}

const carro = new Carro("teste","teste")

carro.mudarEstado(true) // liga o carro
console.log(carro.estado); // true
carro.acelerar(100) // acelera até 100
carro.exibirVelocidadeAtual() // 100
carro.freiar(30) // tira 30 da velociade
carro.exibirVelocidadeAtual()
carro.mudarEstado(false)
console.log(carro.estado)
