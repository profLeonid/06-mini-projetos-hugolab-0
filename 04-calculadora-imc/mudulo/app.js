'use stric'

function calculoIMC(){
    let n1 = document.getElementById('altura').value
    let n2 = document.getElementById('peso').value

    let altura = Number(n1)
    let peso = Number(n2)

    let imc = peso / (altura * altura)

    console.log(imc)

    exibirResultado(imc)
}
function exibirResultado(valor1){
    let result = document.getElementById('resultado')
    let imc = Number(valor1)

    result.classList.remove('baixo', 'normal', 'sobrepeso', 'grauI', 'grauII', 'grauIII')

    if (imc < 18.5){
        console.log('Abaixo do peso')
        result.classList.add('baixo')
    }
    else if(imc >= 18.5 && imc < 24.9){
        console.log('Peso normal')
        result.classList.add('normal')
    }

    else if(imc >= 25.0 && imc < 29.9){
        console.log('Sobrepeso')
        result.classList.add('sobrepeso')
    }

    else if(imc >= 30.0 && imc < 34.9){
        console.log('Obesidade grau I')
        result.classList.add('grauI')
    }

    else if(imc >= 35.0 && imc < 39.9){
        console.log('Obesidade grau II')
        result.classList.add('grauII')
    }

    else if(imc >= 40.0){
        console.log('Obesidade grau III')
        result.classList.add('grauIII')
    }
}

function mudarCor(){}