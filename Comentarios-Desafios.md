# CURSO LÓGICA DE PROGRAMAÇÃO, EXPLORE FUNÇÕES E LISTAS - ALURA

## Resolução dos desafios 2

Em uma carreira de desenvolvimento de software, a prática consistente da lógica de programação desempenha um papel fundamental na construção de bases sólidas.  
Pensando nisso, criamos uma lista de atividades para melhorar sua experiência de aprendizagem.

---

## Respostas

#### 1. Criar uma função que exibe "Olá, mundo!" no console.

```javascript
function saudacao () {
    console.log ('Olá Mundo');
}
saudacao ();
```

#### 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

```javascript
function exibirNome (nome) {
    console.log (`Olá, ${nome}`);
}
exibirNome('Wanessa');
```
#### 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

```javascript
function dobrarNumero(numero) {
    return numero * 2; // Retorna o dobro do número
}

// Chamando a função e armazenando o resultado em uma variável
let resultado = dobrarNumero(5); 

console.log(`O dobro do número é ${resultado}`); // Exibindo no console
```

#### 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

```javascript
function calcularMedia(numero1, numero2, numero3) {
    // Soma os três números, divide por 3 e arredonda para um número inteiro usando parseInt
    return parseInt((numero1 + numero2 + numero3) / 3); 
}

// Chama a função calcularMedia com os valores 5, 3 e 2, e armazena o resultado na variável "resultado"
let resultado = calcularMedia(5, 3, 2);

// Exibe no console a mensagem com o resultado da média calculada
console.log(`A média é ${resultado}`);
```

#### 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

```javascript
function VerificarOMaior(numero1, numero2) {
    // Verifica se o primeiro número é maior que o segundo
    if (numero1 > numero2) {
        return numero1; // Retorna o primeiro número
    } 
    // Verifica se os números são iguais
    else if (numero1 === numero2) {
        return 'números iguais'; // Retorna mensagem indicando que são iguais
    } 
    // Caso o segundo número seja maior
    else {
        return numero2; // Retorna o segundo número
    }
}

// Chama a função com os números 5 e 5
let resultado = VerificarOMaior(5, 5);

// Exibe o resultado no console
console.log(`Resultado: ${resultado}`);
```

#### Também pode ser feito com operador ternário
```javascript
// Função que recebe dois parâmetros e retorna o maior entre eles
function encontrarMaior(a, b) {
  // Usando o operador ternário para comparar os dois números
  return a > b ? a : b; // Se a for maior que b, retorna a; caso contrário, retorna b
}

// Chama a função com os valores 15 e 9, e armazena o resultado em maiorNumero
let maiorNumero = encontrarMaior(15, 9);

// Exibe o valor de maiorNumero no console (15, que é o maior valor)
console.log(maiorNumero);
```

#### 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

```javascript
function Multiplicacao(numero) {

return numero * numero;

}
resultado = Multiplicacao (5);
console.log(`Resultado: ${resultado}`);

```
#### Também pode ser feito com potência elevando ao quadrado

```javascript
function Multiplicacao(numero) {
  return numero ** 2; // Eleva o número ao quadrado
}

// Chama a função passando o valor 5 e armazena o resultado na variável 'resultado'
resultado = Multiplicacao(5);

// Exibe o resultado no console, que será 25
console.log(`Resultado: ${resultado}`);
```
