let minhaAgenda = new AgendaTelefonica();

let contato1 = new Contato("Fulano", "(82)99999-9999");
let contato2 = new Contato("Sicrano", "(82)88888-8888");
let contato3 = new Contato("Beltrano", "(82)77777-7777");
let contato4 = new Contato("Jaciane", "(82)66666-6666");

minhaAgenda.adicionarContato(contato4);
minhaAgenda.adicionarContato(contato3);
minhaAgenda.adicionarContato(contato2);
minhaAgenda.adicionarContato(contato1);

minhaAgenda.excluirContato("Beltrano");

console.log(minhaAgenda);
