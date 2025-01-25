let numeroSecreto = gerarNumeroAleatorio ();

/* function = um trecho de código que vai fazer uma função, vai verificar o chute, saber 
se ele ta certo, etc.. por padrão ela deve ter apenas UMA responsabilidade por isso 
escrevemos dentro dos { } assim como o while, nesse caso nossa função vai ser verificar o chute
*/

function exibirTextoNaTela(tag, texto) {
// Define uma função chamada "exibirTextoNaTela" que recebe dois parâmetros: 
// "tag" (a tag HTML que será selecionada) e "texto" (o conteúdo que será exibido dentro da tag).
    
 let campo = document.querySelector(tag);
// Usa o método `document.querySelector(tag)` para selecionar o elemento HTML correspondente ao parâmetro "tag".
// O elemento encontrado é armazenado na variável `campo`.
    
campo.innerHTML = texto;
// Altera o conteúdo interno do elemento selecionado (`campo`) para o valor fornecido no parâmetro "texto".
}

exibirTextoNaTela ('h1', 'Jogo do número secreto');
// Chama a função "exibirTextoNaTela", passando 'h1' como o parâmetro "tag" e 'Jogo do Número Secreto' como o parâmetro "texto".
// Isso altera o conteúdo do elemento `<h1>` na página para "Jogo do Número Secreto".

exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');



function verificarChute () {

let chute = document.querySelector('input').value;
//Cria uma variável chamada `chute` que armazena o valor inserido pelo usuário em um campo `<input>` no HTML.
    
console.log(numeroSecreto);
console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio () {
  return parseInt(Math.random() *10 + 1);

 // Gera um número aleatório entre 1 e 10 (inclusivo) e retorna o valor.
// Sem o return, a função executaria o cálculo, mas não devolveria o resultado.
}


