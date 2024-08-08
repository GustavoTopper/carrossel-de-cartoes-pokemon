// OBJETIVO 1 - QUANDO O USUARIO CLICAR NA SETA AVANÇAR , IR PARA A PROXIMA CARTA

//     passo 1- pegar o elemento HTML da seta AVANÇAR

//     passo 2- dar um jeito de identificar quando o usuario clicar nele

//     passo 3- mudar para proxima carta da lista

//     passo 4- esconder a carta que estava selecionada

// OBJETIVO 2 - QUANDO O USUARIO CLICAR NA SETA VOLTAR , IR PARA A CARTA ANTERIOR

//     passo 1- pegar o elemento HTML da seta voltar

//     passo 2- dar um jeito de identificar quando o usuario clicar nele

//     passo 3- mudar para a carta anterior da lista

//     passo 4- esconder a carta que estava selecionada

// passo 1- pegar o elemento HTML da seta AVANÇAR

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartaoSelecionado(){
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function () {    
    if(cartaoAtual === cartoes.length - 1){
        return;
    }
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartaoSelecionado();
});

btnVoltar.addEventListener("click", function () {    
    if(cartaoAtual < 1 ){
        return;
    }
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartaoSelecionado();
});