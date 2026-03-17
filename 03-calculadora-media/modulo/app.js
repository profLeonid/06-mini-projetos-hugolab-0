'use stric'

function calcularMedia (){
    const n1 = document.getElementById ('nota1').value
    const n2 = document.getElementById ('nota2').value
    const n3 = document.getElementById ('nota3').value

    let resultadoMedia = (Number(n1) + Number(n2) + Number(n3)) / 3

    resultado(resultadoMedia)
    mudarCor(resultadoMedia)
}

function resultado(valor1){
    const resultado = document.getElementById ('resultado')
    let media = Number(valor1)

    if (media >= 7){
        resultado.textContent = `Média:  ${Number(media).toFixed(2)} - Aprovado`
    }
    else if (media < 5){
        resultado.textContent = `Média:  ${Number(media).toFixed(2)} - Reprovado`
    }
    else if (media >= 5 && media < 7){
        resultado.textContent = `Média:  ${Number(media).toFixed(2)} - Recuperação`
    }
}

function mudarCor (numero){
    const resultado = document.getElementById ('resultado')
    let media = Number(numero)

    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')

    if (media >= 7){
        resultado.classList.add ('aprovado')
    }
    else if (media < 5){
        resultado.classList.add ('reprovado')
    }
    else if (media >= 5 && media < 7){
        resultado.classList.add ('recuperacao')
    }
}
