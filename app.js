// Para alterar algo do HTML usando o Java Script, usa o comando "document" 
// pra o sistema saber qual parte do HTML, USAMOS ".querySelector"
// colocamos depois qual elemento queremos alterar, no caso o "H1"
// para inserir algo dentro da variável que selecionamos "titulo", USAMOS O .innerHTML
// innerHTML significa dentro do html.

let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10  ';


/* function = um trecho de código que vai fazer uma função, vai verificar o chute, saber 
se ele ta certo, etc.. por padrão ela deve ter apenas UMA responsabilidade por isso 
escrevemos dentro dos { } assim como o while, nesse caso nossa função vai ser verificar o chute
*/
function verificarChute() {

console.log ('botão foi clicado');

}

