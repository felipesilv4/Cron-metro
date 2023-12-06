//DOM

const minutosIA = document.querySelector("#minutos")
const segundosIA = document.querySelector("#segundos")
const milisegundosIA = document.querySelector("#milesegundos")
const btnStart = document.querySelector("#btnStart")
const btnPause = document.querySelector("#btnPause")
const btnContinue = document.querySelector("#btnContinue")
const btnReset = document.querySelector("#btnReset")

let interval = 0
let minutos = 0
let segundos = 0
let milisegundos = 0
let isPaused = false

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', pauseTempo)
btnContinue.addEventListener('click', continueTempo)
btnReset.addEventListener('click', reseta)

function start() {
    interval = setInterval(()=>{
        if (!isPaused) {
            milisegundos +=10
            if (milisegundos == 1000) {
                segundos +=1
                milisegundos = 0
        }
         if (segundos == 60) {
        minutos +=1
        segundos = 0
         }
    milisegundosIA.textContent = milisegundos 
    segundosIA.textContent = consertaZero(segundos)
    minutosIA.textContent = consertaZero(minutos)
    }


    }, 10)

    btnStart.style.display = "none"
    btnPause.style.display = "block"
    
}

function pauseTempo() {
    isPaused = true
    btnPause.style.display = "none"
    btnContinue.style.display = "inline-block"

}
function continueTempo(params) {
    isPaused = false
    btnPause.style.display = "block"
    btnContinue.style.display = "none"

}
function reseta() {

    clearInterval(interval)

    minutos = 0
    segundos = 0
    milisegundos = 0




    isPaused = false
    btnPause.style.display = "none"
    btnContinue.style.display = "none"
    btnStart.style.display = "block" 

    milisegundosIA.textContent = consertaZero(milisegundos)
    segundosIA.textContent = consertaZero(segundos)
    minutosIA.textContent = consertaZero(minutos)
}
function consertaZero(time) {
    if (time<10) {

        return `0${time}`

    }else{
        return time
    }
}