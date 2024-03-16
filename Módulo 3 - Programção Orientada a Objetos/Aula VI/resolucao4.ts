interface Ilivro{
  titulo:string
  autor:string
  anoPublicacao:number
}

class Livro{
  _titulo : string
  _autor : string
  _anoPublicacao : number

  constructor(livro:Ilivro){
    if(!Livro.validarStringTitulo(livro.titulo)){
      throw Error("Título inválido")
    }

    this._titulo = livro.titulo

    if(!this.validarStringAutor(livro.autor)){
      throw Error("Autor inválido")    
    } 

    this._autor =livro.autor
    this._anoPublicacao=livro.anoPublicacao
    

    
  }

  static validarStringTitulo(srt:string):boolean{
    if(srt === ""){
      return false
    }
    return true
  }

  private validarStringAutor(str : string): boolean{
    const regex = /^[A-Za-z\u00C0-\u017F\s-]+$/;


    return regex.test(str)
  }

}

class Biblioteca  {
  
   static _listaLivros : Livro[] = []

   static adicionar(livro:Livro):boolean{

    const verificacao : boolean = this._listaLivros.some((livroLista) => livroLista._titulo=== livro._titulo && livroLista._titulo && livroLista._autor === livro._autor && livroLista._anoPublicacao === livro._anoPublicacao)

    if(verificacao){    
      console.error("Livro já existente no banco de dados")
      return false
    }
  
    this._listaLivros.push(livro)
    console.log(`Livro ${livro._titulo} adcionado com sucesso.`)
    return true
  }

  static remover(titulo: string):boolean{
    const index = Biblioteca.pesquisarLivroporTitulo(titulo)

    if(!index){

      console.error("Não há livro com esse nome")
      return false
      
    }
    this._listaLivros.splice(index,1)
    return true
    
  }

  static pesquisarLivroporTitulo(titulo:string):number{
    const index = this._listaLivros.findIndex(alvo => alvo._titulo === titulo)
    if(index === -1){
          console.error("Não há livro com esse título")
          return -1
  } 
    console.log(
    ` Resultado da Pesquisa :
      Título: ${Biblioteca._listaLivros[index]._titulo} | Autor: ${Biblioteca._listaLivros[index]._autor} | AnoPublicacao: ${Biblioteca._listaLivros[index]._anoPublicacao}
    `
    )
    return  index
  

}

static pesquisarLivroPorAutor(autor:string): number{
  const index = this._listaLivros.findIndex(alvo => alvo._autor === autor )
    if(index === -1){
          console.error("Não há livro com esse autor")
          return -1
  } 
    console.log(
    ` Resultado da Pesquisa :
      Título: ${Biblioteca._listaLivros[index]._titulo} | Autor: ${Biblioteca._listaLivros[index]._autor} | AnoPublicacao: ${Biblioteca._listaLivros[index]._anoPublicacao}
    `
    )
    return  index

}
}

const exemplar1: Ilivro = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949
};

const exemplar2: Ilivro = {
  titulo: "O Senhor dos Anéis",
  autor: "JRR Tolkien",
  anoPublicacao: 1954
};

const exemplar3: Ilivro = {
  titulo: "Moby Dick",
  autor: "Herman Melville",
  anoPublicacao: 1851
};

// const livro4: Ilivro = {
//   titulo: "Orgulho e Preconceito",
//   autor: "Jane Austen",
//   anoPublicacao: 1813
// };

// const livro5: Ilivro = {
//   titulo: "Cem Anos de Solidão",
//   autor: "Gabriel García Márquez",
//   anoPublicacao: 1967
// };

// const livro6: Ilivro = {
//   titulo: "Dom Quixote",
//   autor: "Miguel de Cervantes",
//   anoPublicacao: 1605
// };



const livro1 = new Livro(exemplar1)
Biblioteca.adicionar(livro1)

const livro2 = new Livro(exemplar2)
Biblioteca.adicionar(livro2)

const livro3 = new Livro(exemplar3)
Biblioteca.adicionar(livro3)
console.log("\nLista de livros sem exclusao:\n");

console.log(Biblioteca._listaLivros)
// Biblioteca.remover("aula")

// console.log("\nLista de livros após executar o deletar\n")
// console.log(Biblioteca._listaLivros)

Biblioteca.pesquisarLivroPorAutor("Herman Melville")
Biblioteca.pesquisarLivroporTitulo("1984")




