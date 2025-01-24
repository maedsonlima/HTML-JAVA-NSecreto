// Para alterar algo do HTML usando o Java Script, usa o comando "document" 
// pra o sistema saber qual parte do HTML, USAMOS ".querySelector"
// colocamos depois qual elemento queremos alterar, no caso o "H1"
// para inserir algo dentro da variável que selecionamos "titulo", USAMOS O .innerHTML
// innerHTML significa dentro do html.

let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10  ';

