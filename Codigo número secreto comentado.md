# CÓDIGO DO JOGO COM COMENTÁRIOS

```javascript
// Lista para armazenar os números já sorteados e evitar repetições
let listaDeNumerosSorteados = [];
// Define o limite máximo para o número secreto
let numeroLimite = 100;
// Gera o primeiro número secreto
let numeroSecreto = gerarNumeroAleatorio();
// Contador de tentativas do jogador
let tentativa = 1;

function gerarNumeroAleatorio() {
  // Gera um número aleatório entre 1 e numeroLimite
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  
  // Verifica a quantidade de elementos na lista de números já sorteados
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  // Se todos os números possíveis já foram sorteados, esvazia a lista
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  // Verifica se o número gerado já foi sorteado antes
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      // Se já foi sorteado, chama a função novamente até obter um número inédito
      return gerarNumeroAleatorio();
  } else {
      // Se for um número novo, adiciona à lista e retorna como número secreto
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
  }
}

// Exibe um texto na tela e faz leitura em voz alta, se suportado pelo navegador
function exibirTextoNaTela(tag, texto) {   
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

  // Verifica se a API de síntese de voz é suportada pelo navegador
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.6; // Ajusta a velocidade da fala
    window.speechSynthesis.speak(utterance); 
  } else {
    console.log("Web Speech API não suportada neste navegador.");
  }
}

// Exibe a mensagem inicial do jogo na tela
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLimite);
}

// Chama a função para exibir a mensagem inicial assim que o jogo começa
mensagemInicial();

function verificarChute() {
  // Obtém o valor digitado pelo jogador e converte para número
  let chute = parseInt(document.querySelector('input').value);
    
  // Verifica se o número chutado está correto
  if (chute == numeroSecreto) {
    // Ajusta a palavra "tentativa" para singular ou plural
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';  
    let mensagemTentativas = `Você acertou com ${tentativa} ${palavraTentativa}`;

    // Exibe a mensagem de acerto e habilita o botão de reinício
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // Se errou, informa se o número é maior ou menor
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número é menor');
    } else {
      exibirTextoNaTela('p', 'O número é maior');
    }
    
    // Incrementa a quantidade de tentativas e limpa o campo de entrada
    tentativa++;
    limparCampo();
  }
}

// Limpa o campo de entrada após cada tentativa
function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

// Reinicia o jogo, redefinindo as variáveis e desativando o botão de reinício
function reiniciarJogo() {
  mensagemInicial();
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();  
  tentativa = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

```
