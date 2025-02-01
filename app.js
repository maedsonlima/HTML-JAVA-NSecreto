let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativa = 1;

function gerarNumeroAleatorio () {
  let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio ();
  }else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log (listaDeNumerosSorteados);
      return numeroEscolhido;
  }
}

function exibirTextoNaTela(tag, texto) {   
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e ' +numeroLimite);
}
mensagemInicial();

function verificarChute () {
  let chute = parseInt(document.querySelector('input').value);
    
  if (chute == numeroSecreto) {

    let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';  
    let mensagemTentativas = (`Você acertou com ${tentativa} ${palavraTentativa}`)
      exibirTextoNaTela ('h1', 'Acertou!');
      exibirTextoNaTela ('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
// Habilita o botão com o ID 'reiniciar' removendo o atributo 'disabled'
// Ele busca o elemento pelo ID, e remove o atributo que desabilita.

  }else{
      if(chute > numeroSecreto){
        exibirTextoNaTela ('p', 'o número é menor');
      }else {
        exibirTextoNaTela ('p', 'o número é maior' );
      }
      tentativa++;
      limparCampo();
    }
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  mensagemInicial();
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();  
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


