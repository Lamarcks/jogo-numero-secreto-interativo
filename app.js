// ==============================
// Variáveis principais do jogo
// ==============================
// array para armazenar números já sorteados (evita repetição)
// limite do número secreto ou dificuldade do jogo
// número sorteado inicialmente
// contador de tentativas do jogador
let numsSorteados = []; 
let numLimite = 10;     
let numSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;     

// ==================================
// Função para exibir texto no HTML
// ==================================
// recebe uma TAG (h1, p) e o texto a ser mostrado
// o texto é lido em voz alta usando responsiveVoice
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// ==========================
// Mensagem inicial do jogo
// ==========================
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

// ============================
// Verificar chute do jogador
// ============================
// compara o chute com o número secreto
// dá dicas se o número é maior ou menor
// conta tentativas até acertar
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numSecreto) {
        // jogador acertou o número secreto
        exibirTextoNaTela('h1', 'Acertou!');
        // troca "tentativa" por "tentativas" automaticamente
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        // habilita botão reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         // jogador errou e dá dica se o número é maior ou menor
        if (chute > numSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        // limpa o local de chute
        limparCampo();
    }
}

// ====================================
// Gerar número aleatório sem repetir
// ====================================
// sorteia um número entre 1 e numLimite
// garante que não seja repetido usando includes()
// reinicia lista quando todos já foram sorteados
function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeDeElementosNaLista = numsSorteados.length;

    if (quantidadeDeElementosNaLista == numLimite) {
        // reseta a lista quando já sorteou todos
        numsSorteados = []; 
    }
    // repete o sorteio até achar um número novo
    if (numsSorteados.includes(numEscolhido)) { 
        return gerarNumeroAleatorio();
    } else {
        // adiciona número sorteado na lista (.push)
        numsSorteados.push(numEscolhido);
        return numEscolhido;
    }
}

// =========================
// Limpar campo de entrada
// =========================
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// ================
// Reiniciar jogo
// ================
// novo número secreto
// reseta tentativas
// bloqueia botão reiniciar até acertar
function reiniciarJogo() {
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
