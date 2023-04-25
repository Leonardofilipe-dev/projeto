//função normal
function imprimirConsole(){
    console.log("Olá, mundo!")
}

//Precisa invocar a função
imprimirConsole()

//função com parametros ---------------------------------------
function soma(n1, n2){
    console.log(n1 + n2)
}

soma(5, 5)

// declarando a função com uma variavel -------------------------

const numeroAleatorio = function(){
    console.log(Math.random())
}

numeroAleatorio()
numeroAleatorio()
