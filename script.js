//Variables
let startBtn = document.getElementById("startBtn")
let timer = document.getElementById("timer")
let resetBtn = document.getElementById("resetBtn")
let option2Btn = document.getElementById("option2Btn")
let option1Btn = document.getElementById("option1Btn")
let breakBtn = document.getElementById("breakBtn")
let workBtn = document.getElementById("workBtn")
let seconds = 25*60
let resetvalue = 25*60
let work = true

updateDisplay(seconds)


function updateDisplay(seconds){
    let second = seconds%60
    if (second<10){
        timer.innerText  = Math.floor(seconds/60) + ":0" + second
    }
    else{
        timer.innerText  = Math.floor(seconds/60) + ":" + second
    }
    
}

let interval = null

//Event Listeners

option2Btn.addEventListener("click", () =>{
    seconds = 50*60
    resetvalue = 50*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
})

option1Btn.addEventListener("click", () =>{
    seconds = 25*60
    resetvalue = 25*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
})

startBtn.addEventListener("click", () => {
    if(startBtn.innerText == "START"){
        startBtn.innerText = "STOP"
        seconds--
        updateDisplay(seconds)

        interval = setInterval(() => {
            seconds--
            updateDisplay(seconds)

            if(seconds==0){
                if(work)
                    breakChanges()
                else
                    workChanges()
                startBtn.innerText = "START"
            }
        },1000)

    }
    else{
        clearInterval(interval)
        startBtn.innerText = "START"
    }
})

resetBtn.addEventListener("click", () => {
    seconds = resetvalue
    updateDisplay(seconds)
    clearInterval(interval)

    startBtn.innerText = "START"

})


//break mode

breakBtn.addEventListener("click", () => {
    work = false
    breakChanges()
})

function breakChanges(){
    work = false
    document.getElementById("pomodoroContainer").style.backgroundColor = "#c3c3c3"
    document.getElementById("pomodoroContainer").style.color = "#000000"


    option1Btn.innerText = 5
    option2Btn.innerText = 10
    seconds = 5*60
    updateDisplay(seconds)
    resetvalue = 5 * 60

    option2Btn.addEventListener("click", () =>{
    seconds = 10*60
    resetvalue = 10*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
    })

option1Btn.addEventListener("click", () =>{
    seconds = 5*60
    resetvalue = 5*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
    })

    document.getElementById("pomodoroContainer").style.transition = "1s ease-in"
    
}

//work mode

workBtn.addEventListener("click", () => {
    work = true
    workChanges()
})

function workChanges(){
    work = true
    document.getElementById("pomodoroContainer").style.backgroundColor = "#0e0e0eee"
    document.getElementById("pomodoroContainer").style.color = "#ffffff"
    

    option1Btn.innerText = 25
    option2Btn.innerText = 50
    seconds = 25*60
    updateDisplay(seconds)
    resetvalue = 25 * 60

    option2Btn.addEventListener("click", () =>{
    seconds = 50*60
    resetvalue = 50*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
    })

option1Btn.addEventListener("click", () =>{
    seconds = 25*60
    resetvalue = 25*60
    clearInterval(interval)
    updateDisplay(seconds)
    startBtn.innerText = "START"
    })

    document.getElementById("pomodoroContainer").style.transition = "1s ease-in"
}

