class Contato {
    constructor(nome, telefone) {
      this.nome = nome;
      this.telefone = telefone;
    }
  }
  
  class AgendaTelefonica {
    constructor() {
      this._listaDeContatos = [];
    }
  
    adicionarContato(contato) {
      this._listaDeContatos.push(contato);
    }
  
    excluirContato(nome) {
      for (let i = 0; this._listaDeContatos.length > i; i++) {
        if (this._listaDeContatos[i].nome == nome) {
          this._listaDeContatos.splice(i, 1);
          i--;
        }
      }
    }
  }
  