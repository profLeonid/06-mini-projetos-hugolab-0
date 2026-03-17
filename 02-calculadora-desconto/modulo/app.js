'use stric'


function removerClasses () {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('cinco', 'dez', 'acimaDez')
}

//  vai fazer o calculo desconto
function calcularDesconto (){
    const precoOriginal      = document.getElementById('preco').value
    const percentualDesconto = document.getElementById('desconto').value
    
    const valorEco = (Number(percentualDesconto) / 100) * Number(precoOriginal)

    trocaDeCor(percentualDesconto)
    calcularPrecoFinal(precoOriginal, valorEco)
}

// vai fazer o calculo do valor final
function calcularPrecoFinal (precoInicial, precoFinal){
    let precoI = precoInicial
    let precoF = precoFinal

    let resultCalc = Number(precoI) - Number(precoF)

    exibirResultado(precoF, resultCalc)
}

// vai exibir os resultaos na tbl de resultado
function exibirResultado (desconto, precoFinal){
    const result             = document.getElementById('resultado')
    let preco    = precoFinal
    let economia = desconto

    result.textContent = `Você vai economizar: ${Number(economia).toFixed(2)} - O valor final será: ${Number(preco).toFixed(2)}`
}

// troca a cor da borda da resposta
const trocaDeCor = function(percentual){
    const resultado  = document.getElementById('resultado')
    const desconto   = Number(percentual)

    // exclui a classe criada
    resultado.classList.remove('cinco', 'dez', 'acimaDez')

    if (desconto <= 5){
        resultado.classList.add('cinco')

    }else if (desconto > 5 && desconto < 10){
        resultado.classList.add('dez')

    }else if (desconto > 10){
        resultado.classList.add('acimaDez')
    }

}

    

