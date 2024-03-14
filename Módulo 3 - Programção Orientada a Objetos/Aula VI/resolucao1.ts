class Produto{
    private _nome : string
    private _preco : number
    private _quantidade : number
    private _disponibilidade : string

    constructor(nome:string,preco:number,quantidade:number){
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade
        this._disponibilidade = "Disponível"
        
    }

    calcularValorTotal():void{
        const valorTotal : number = this._preco * this._quantidade
        return console.log(`Valor total em estoque: ${valorTotal}`)
    }

    verificarDisponibilidade() : string{
        if(this._quantidade <= 0){
            return this._disponibilidade = "Indisponível"
        }

        return this._disponibilidade = "Disponível"
    }

    

}