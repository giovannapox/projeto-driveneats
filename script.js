function selecionarPrato(pratoSelecionado){

    const clearSelecionado = document.querySelector('.pratos .selecionado');
    
    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado');
    } 

    pratoSelecionado.classList.add('selecionado');
}

function selecionarBebida(bebidaSelecionada){

    const clearSelecionado = document.querySelector('.bebidas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    bebidaSelecionada.classList.add('selecionado');
}

function selecionarSobremesa(sobremesaSelecionada){

    const clearSelecionado = document.querySelector('.sobremesas .selecionado')

    if(clearSelecionado !== null){
        clearSelecionado.classList.remove('selecionado')
    }

    sobremesaSelecionada.classList.add('selecionado');
}


