<div align="center">

# 🎮 Jogo do Número Secreto — Versão Interativa

### Evolução do projeto de lógica de programação com JavaScript

Projeto desenvolvido durante meus estudos na **Alura + Oracle Next Education (ONE)** como evolução do primeiro Jogo do Número Secreto, aplicando **funções, manipulação do DOM, arrays e interação com uma interface web**.

<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white) 

</div>

---

## 📌 Sobre o projeto

O **Jogo do Número Secreto — Versão Interativa** é uma evolução do meu primeiro projeto desenvolvido com JavaScript.

Nesta versão, a lógica anteriormente executada através de comandos simples foi integrada a uma **interface web interativa**, permitindo que o jogador informe seus palpites diretamente na página e receba dicas até descobrir o número secreto.

O código também foi reorganizado em **funções específicas**, tornando a aplicação mais estruturada, reutilizável e fácil de compreender.

> Este projeto representa a evolução dos primeiros conceitos de lógica de programação para uma aplicação web com maior organização e interação com o usuário.

---

## 🎯 Objetivo

O projeto foi desenvolvido para aprofundar conhecimentos em:

* 🧠 Lógica de programação
* ⚙️ Funções em JavaScript
* 🖥️ Manipulação do DOM
* 📋 Arrays
* 🔀 Estruturas condicionais
* 🎲 Geração de números aleatórios
* 🔄 Controle de estado do jogo
* 🎨 Integração entre HTML, CSS e JavaScript
* 🔊 Recursos de acessibilidade por voz

---

## 🎮 Como funciona

O sistema gera aleatoriamente um número entre **1 e 10**.

O jogador informa um palpite e a aplicação verifica o valor:

```text
Início do jogo
      ↓
Gerar número secreto
      ↓
Jogador informa um palpite
      ↓
Comparar os valores
      ↓
O número está correto?
   ↙              ↘
 Não              Sim
 ↓                 ↓
Informar se       Exibir vitória
é maior ou menor  + tentativas
 ↓                 ↓
Novo palpite      Liberar novo jogo
```

---

## ✨ Funcionalidades

* 🎲 Geração aleatória do número secreto
* 🔁 Controle para evitar repetição imediata de números sorteados
* 🔢 Contagem das tentativas realizadas
* ⬆️ Indicação quando o número secreto é maior
* ⬇️ Indicação quando o número secreto é menor
* 🧹 Limpeza automática do campo após uma tentativa incorreta
* 🔄 Botão para iniciar uma nova partida
* 🖥️ Atualização dinâmica das mensagens na interface
* 🔊 Leitura das mensagens do jogo em voz alta
* 📱 Interface adaptável a diferentes tamanhos de tela

---

## 🧩 Organização do JavaScript

A lógica foi dividida em funções com responsabilidades específicas:

### `exibirTextoNaTela()`

Atualiza textos da interface e executa a leitura das mensagens.

### `exibirMensagemInicial()`

Configura as mensagens apresentadas no início de cada partida.

### `verificarChute()`

Compara o palpite informado pelo jogador com o número secreto.

### `gerarNumeroAleatorio()`

Gera os números utilizados nas partidas e controla os números anteriormente sorteados.

### `limparCampo()`

Limpa o campo utilizado para inserir novos palpites.

### `reiniciarJogo()`

Reinicia as variáveis e prepara uma nova partida.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia          | Aplicação                         |
| ------------------- | --------------------------------- |
| **JavaScript**      | Lógica e funcionalidades do jogo  |
| **HTML5**           | Estrutura da interface            |
| **CSS3**            | Estilização e responsividade      |
| **ResponsiveVoice** | Reprodução das mensagens em áudio |
| **Git**             | Versionamento do projeto          |
| **GitHub**          | Armazenamento e documentação      |

---

## 📂 Estrutura do projeto

```text
jogo-numero-secreto-interativo/
│
├── img/
│
├── app.js
├── index.html
├── style.css
└── README.md
```

### Principais arquivos

**`app.js`**
Contém toda a lógica do jogo e as funções responsáveis pela interação.

**`index.html`**
Define os elementos da interface, campo de entrada e botões.

**`style.css`**
Responsável pela identidade visual e adaptação da interface.

**`img/`**
Armazena os recursos visuais utilizados na aplicação.

---

## 📈 Evolução do projeto

Este projeto foi desenvolvido após uma primeira versão mais simples do Jogo do Número Secreto.

### Versão inicial

```text
Variáveis
   ↓
Condicionais
   ↓
While
   ↓
Alert / Prompt
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

Essa evolução permitiu aplicar os mesmos fundamentos de lógica em uma estrutura de código mais organizada e próxima de uma aplicação web real.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Lamarcks/Projeto-do-Jogo-Secreto-Documentado-e-com-Fun-es-Extras.git
```

### 2. Acesse a pasta

```bash
cd Projeto-do-Jogo-Secreto-Documentado-e-com-Fun-es-Extras
```

### 3. Execute

Abra:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code.

---

## 📚 Conhecimentos desenvolvidos

* Criação e utilização de funções
* Manipulação do DOM
* Manipulação de arrays
* Uso de `querySelector`
* Estruturas condicionais
* Geração de números aleatórios
* Controle de tentativas
* Manipulação dinâmica de elementos HTML
* Integração de bibliotecas externas
* Organização e documentação de código
* Responsividade com CSS
* Integração entre HTML, CSS e JavaScript

---

## ✅ Status do projeto

**Concluído ✅**

Projeto desenvolvido para aprofundamento dos fundamentos de **JavaScript e desenvolvimento web**.

---

## 👨‍💻 Autor

**Ihago Lamarcks**

Estudante de **Análise e Desenvolvimento de Sistemas**, com foco em **Python, Dados, Inteligência Artificial e Cloud Computing**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ihago%20Lamarcks-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/ihago-lamarcks1/)

---

<div align="center">

### 🎮 Evoluindo da lógica de programação para aplicações web interativas.

**JavaScript • HTML • CSS • DOM • Oracle Next Education**

</div>
