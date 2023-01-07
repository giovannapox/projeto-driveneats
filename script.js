let prato, precoPrato, pratoReplace;

function selecionarPrato(pratoSelecionado){

    const clearSelecionado = document.querySelector('.pratos .selecionado');
    
    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado');
    } 

    pratoSelecionado.classList.add('selecionado');

    let nomePrato = document.querySelector('.pratos .selecionado');
    prato = nomePrato.querySelector('.nome-item').innerHTML

    let preco = document.querySelector('.pratos .selecionado');
    precoPrato = preco.querySelector('.preco').innerHTML

    pratoReplace = precoPrato.replace(",",".")
    
    trocarNomesPreco();
    verificaPedido();
}

let bebida, precoBebida, bebidaReplace;

function selecionarBebida(bebidaSelecionada){

    const clearSelecionado = document.querySelector('.bebidas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    bebidaSelecionada.classList.add('selecionado');

    let nomeBebida = document.querySelector('.bebidas .selecionado');
    bebida = nomeBebida.querySelector('.nome-item').innerHTML

    let preco = document.querySelector('.bebidas .selecionado');
    precoBebida = preco.querySelector('.preco').innerHTML

    bebidaReplace = precoBebida.replace(",",".")

    trocarNomesPreco();
    verificaPedido();
}

let sobremesa, precoSobremesa, sobremesaReplace;

function selecionarSobremesa(sobremesaSelecionada){

    const clearSelecionado = document.querySelector('.sobremesas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    sobremesaSelecionada.classList.add('selecionado');

    let nomeSobremesa = document.querySelector('.sobremesas .selecionado');
    sobremesa = nomeSobremesa.querySelector('.nome-item').innerHTML

    let preco = document.querySelector('.sobremesas .selecionado');
    precoSobremesa = preco.querySelector('.preco').innerHTML

    sobremesaReplace = precoSobremesa.replace(",",".")
    
    trocarNomesPreco();
    verificaPedido();
}

function verificaPedido(){

    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
 
        const botao = document.querySelector(".botao");
        botao.classList.add('finalizado')
        botao.removeAttribute("disabled")
        botao.innerHTML = "Fechar pedido";      
}

}

function finalizarPedido(){
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
    document.querySelector('.finalizar-pedido').classList.remove('escondido');
    }
}

function cancelarPedido(){
    document.querySelector('.finalizar-pedido').classList.add('escondido');
}

let totalReplace;

function trocarNomesPreco(){
    const nomePrato = document.querySelector(".nome-prato");
    nomePrato.innerHTML = prato;

    const nomeBebida = document.querySelector(".nome-bebida");
    nomeBebida.innerHTML = bebida;

    const nomeSobremesa = document.querySelector(".nome-sobremesa");
    nomeSobremesa.innerHTML = sobremesa;

    const pratoPreco = document.querySelector(".preco-prato");
    pratoPreco.innerHTML = precoPrato;

    const bebidaPreco = document.querySelector(".preco-bebida");
    bebidaPreco.innerHTML = precoBebida;

    const sobremesaPreco = document.querySelector(".preco-sobremesa");
    sobremesaPreco.innerHTML = precoSobremesa;

    const precoTotal = document.querySelector(".preco-total");
    let total = Number(sobremesaReplace) + Number(pratoReplace) + Number(bebidaReplace);
    total = total.toFixed(2)
    totalReplace = total.replace(".",",")
    precoTotal.innerHTML = totalReplace;
}

let mensagem;

function enviarWhats(){
    const nome = prompt('Digite seu nome:')
    const endereco = prompt('Digite seu endereço:')
    let mensagem = 'Olá, gostaria de fazer o pedido: \n - Prato: ' 
    + prato + '\n - Bebida: ' + bebida + '\n - Sobremesa: ' + sobremesa +
    '\n Total: R$ ' + totalReplace + '\n \n Nome: ' + nome + '\n Endereço: ' + endereco; 

    const enviaPedido = "https://wa.me/5516993969087?text=" + encodeURI(mensagem);
    window.open(enviaPedido)
}

