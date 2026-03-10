'use stric'

function removerClasses () {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto', 'naoApto')
}

function calculo (){
    const precoOriginal      = document.getElementById('original')
    const percentualDesconto = document.getElementById('desconto')
    
    const resultado = (percentualDesconto / 100) * precoOriginal

    imprimirResultado(resultado)

}

function imprimirResultado (valor1) {

    const resultado = valor1

    
}