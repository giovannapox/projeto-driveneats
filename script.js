let prato;

function selecionarPrato(pratoSelecionado){

    const clearSelecionado = document.querySelector('.pratos .selecionado');
    
    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado');
    } 

    pratoSelecionado.classList.add('selecionado');

    let nomePrato = document.querySelector('.pratos .selecionado');
    prato = nomePrato.querySelector('.nome-item').innerHTML
    console.log(prato)

    verificaPedido();
}

let bebida; 

function selecionarBebida(bebidaSelecionada){

    const clearSelecionado = document.querySelector('.bebidas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    bebidaSelecionada.classList.add('selecionado');

    let nomeBebida = document.querySelector('.bebidas .selecionado');
    bebida = nomeBebida.querySelector('.nome-item').innerHTML
    console.log(bebida)

    verificaPedido();
}

let sobremesa;

function selecionarSobremesa(sobremesaSelecionada){

    const clearSelecionado = document.querySelector('.sobremesas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    sobremesaSelecionada.classList.add('selecionado');

    let nomeSobremesa = document.querySelector('.sobremesas .selecionado');
    sobremesa = nomeSobremesa.querySelector('.nome-item').innerHTML
    console.log(sobremesa)

    verificaPedido();
}

function verificaPedido(){

    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
 
        const botao = document.querySelector(".botao");
        botao.classList.add('finalizado')
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

