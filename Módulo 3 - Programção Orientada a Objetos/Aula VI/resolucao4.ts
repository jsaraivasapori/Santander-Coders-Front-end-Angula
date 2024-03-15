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
    if(!this.validarStringTitulo(livro.titulo)){
      throw Error("Título inválido")
    }

    this._titulo = livro.titulo

    if(!this.validarStringAutor(livro.autor)){
      throw Error("Autor inválido")    
    } 

    this._autor =livro.autor
    this._anoPublicacao=livro.anoPublicacao
    

    
  }

  private validarStringTitulo(srt:string):boolean{
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
  

}

const livro1: Ilivro = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949
};

const livro2: Ilivro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954
};

const livro3: Ilivro = {
  titulo: "Moby Dick",
  autor: "Herman Melville",
  anoPublicacao: 1851
};

const livro4: Ilivro = {
  titulo: "Orgulho e Preconceito",
  autor: "Jane Austen",
  anoPublicacao: 1813
};

const livro5: Ilivro = {
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  anoPublicacao: 1967
};

const livro6: Ilivro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  anoPublicacao: 1605
};



const livro = new Livro(livro1)
Biblioteca.adicionar(livro)
console.log(Biblioteca._listaLivros)




