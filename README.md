<div align="center">

# Jogo do Número Secreto - Versão Interativa

Evolução do projeto de lógica de programação com JavaScript, utilizando funções, manipulação do DOM e interação com uma interface web.

<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)

</div>

---

## Sobre o projeto

O **Jogo do Número Secreto — Versão Interativa** é uma evolução do primeiro projeto de Jogo do Número Secreto desenvolvido durante meus estudos na **Alura + Oracle Next Education (ONE)**.

Nesta versão, a lógica do jogo foi integrada a uma **interface web**, permitindo que o jogador informe seus palpites diretamente na página e receba dicas até descobrir o número secreto.

O código também foi organizado em funções específicas, facilitando a divisão de responsabilidades e a compreensão da lógica da aplicação.

O projeto representa uma etapa de evolução dos primeiros conceitos de lógica de programação para uma aplicação web interativa utilizando JavaScript.

---

## Objetivo

O principal objetivo foi aprofundar os conhecimentos de JavaScript e transformar uma aplicação baseada em `prompt()` e `alert()` em uma interface web interativa.

Durante o desenvolvimento foram trabalhados:

* Funções em JavaScript;
* Manipulação do DOM;
* Arrays;
* Estruturas condicionais;
* Geração de números aleatórios;
* Controle de tentativas;
* Controle do estado do jogo;
* Manipulação dinâmica de elementos HTML;
* Integração entre HTML, CSS e JavaScript;
* Recursos de acessibilidade por voz;
* Responsividade da interface.

---

## Como funciona

O sistema gera aleatoriamente um número entre **1 e 10**.

O jogador informa um palpite através do campo disponível na interface. A aplicação compara o valor informado com o número secreto e apresenta uma indicação caso o número secreto seja maior ou menor.

O jogo continua até que o jogador acerte o número.

```text
Início
  ↓
Geração do número secreto
  ↓
Jogador informa um palpite
  ↓
Comparação dos valores
  ↓
O palpite está correto?
   ↙              ↘
 Não              Sim
 ↓                 ↓
Informa se o       Exibe mensagem
número é maior     de vitória
ou menor           ↓
 ↓              Libera novo jogo
Novo palpite
```

Após o acerto, o botão **Novo jogo** é habilitado para iniciar uma nova partida.

---

## Funcionalidades

* Geração aleatória do número secreto;
* Controle dos números já sorteados para evitar repetições;
* Contagem das tentativas realizadas;
* Indicação se o número secreto é maior ou menor que o palpite;
* Limpeza automática do campo após uma tentativa incorreta;
* Reinício da partida através do botão **Novo jogo**;
* Atualização dinâmica das mensagens na interface;
* Leitura das mensagens do jogo em voz alta;
* Interface adaptável para diferentes tamanhos de tela.

---

## Organização do JavaScript

A lógica principal foi dividida em funções com responsabilidades específicas.

### `exibirTextoNaTela()`

Atualiza os textos apresentados na interface e realiza a leitura da mensagem utilizando o recurso de voz.

### `exibirMensagemInicial()`

Define as mensagens apresentadas ao iniciar uma nova partida.

### `verificarChute()`

Obtém o palpite informado pelo jogador, compara com o número secreto e apresenta o resultado.

### `gerarNumeroAleatorio()`

Gera os números utilizados nas partidas e utiliza um array para controlar os números que já foram sorteados.

### `limparCampo()`

Limpa o campo utilizado para inserir os palpites.

### `reiniciarJogo()`

Gera um novo número secreto, reinicia o contador de tentativas, limpa o campo e prepara uma nova partida.

---

## Tecnologias utilizadas

| Tecnologia          | Utilização                          |
| ------------------- | ----------------------------------- |
| **JavaScript**      | Lógica e funcionamento do jogo      |
| **HTML5**           | Estrutura da interface              |
| **CSS3**            | Estilização e responsividade        |
| **ResponsiveVoice** | Reprodução das mensagens em áudio   |
| **Git**             | Versionamento do projeto            |
| **GitHub**          | Hospedagem e documentação do código |

---

## Estrutura do projeto

```text
jogo-numero-secreto-interativo/
│
├── img/
│   ├── code.png
│   ├── ia.png
│   └── Ruido.png
│
├── app.js
├── index.html
├── style.css
└── README.md
```

### Principais arquivos

**`app.js`**

Contém a lógica principal do jogo, incluindo geração dos números, verificação dos palpites, controle das tentativas, mensagens e reinicialização da partida.

**`index.html`**

Define a estrutura da interface, o campo para inserção dos palpites e os botões utilizados durante o jogo.

**`style.css`**

Responsável pela estilização da aplicação, incluindo layout, tipografia, cores, botões e comportamento responsivo.

**`img/`**

Contém os recursos visuais utilizados na interface da aplicação.

---

## Evolução do projeto

Este projeto foi desenvolvido como uma evolução de uma primeira versão mais simples do Jogo do Número Secreto.

### Versão inicial

```text
Variáveis
   ↓
Condicionais
   ↓
While
   ↓
Prompt / Alert
```

### Versão interativa

```text
Funções
   ↓
Arrays
   ↓
DOM
   ↓
Interface Web
   ↓
Controle de Estado
   ↓
Acessibilidade por Voz
```

A evolução permitiu aplicar os mesmos fundamentos de lógica de programação em uma estrutura mais organizada e com maior interação através da interface web.

---

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Lamarcks/jogo-numero-secreto-interativo.git
```

### 2. Acesse a pasta

```bash
cd jogo-numero-secreto-interativo
```

### 3. Execute o projeto

Abra o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code.

> O projeto utiliza a biblioteca externa **ResponsiveVoice**, carregada diretamente pelo `index.html`, portanto é necessário acesso à internet para utilizar o recurso de leitura por voz.

---

## Conceitos praticados

Entre os principais conceitos utilizados no desenvolvimento estão:

```javascript
function
```

Utilizado para dividir a aplicação em funções com responsabilidades específicas.

```javascript
querySelector()
```

Utilizado para localizar elementos da interface e permitir sua manipulação através do JavaScript.

```javascript
includes()
```

Utilizado para verificar se um número já foi sorteado anteriormente.

```javascript
push()
```

Utilizado para adicionar números ao array que controla os valores já sorteados.

```javascript
Math.random()
```

Utilizado para gerar os números aleatórios utilizados nas partidas.

```javascript
tentativas++
```

Utilizado para controlar a quantidade de tentativas realizadas pelo jogador.

---

## Aprendizados

O desenvolvimento deste projeto ajudou a aprofundar conhecimentos que foram utilizados em relação à versão inicial, principalmente:

* Organização da lógica em funções;
* Manipulação do DOM;
* Utilização de arrays;
* Controle de estado de uma aplicação;
* Manipulação dinâmica da interface;
* Integração entre JavaScript, HTML e CSS;
* Utilização de recursos externos;
* Desenvolvimento de interfaces responsivas;
* Aplicação de recursos de acessibilidade;
* Organização e documentação de código.

---

## Status

**Concluído**

Projeto desenvolvido durante meus estudos para aprofundamento dos fundamentos de **JavaScript e desenvolvimento web**.

---

## Autor

**Ihago Lamarcks**

Estudante de **Análise e Desenvolvimento de Sistemas**, com interesse em desenvolvimento de software, automação, Python, Inteligência Artificial e tecnologias web.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ihago%20Lamarcks-0A66C2?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/ihago-lamarcks1/)

---

<div align="center">

**Projeto desenvolvido durante minha formação em tecnologia.**

Oracle Next Education • Alura • JavaScript

</div>
