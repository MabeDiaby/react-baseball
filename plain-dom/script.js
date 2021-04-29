console.log("attached")
let balls   = 0
let strikes = 0
let outs    = 0
let inning  = 1

const buttonSwingMiss = document.querySelector("#swing-miss")
const buttonEventOut  = document.querySelector("#event-out")

const valueBalls    = document.querySelector(".balls-value")
const valueStrikes  = document.querySelector(".strikes-value")
const valueOuts     = document.querySelector(".outs-value")


buttonSwingMiss.addEventListener('click', swingMiss)
buttonEventOut.addEventListener('click', eventOut)

function swingMiss() {
    if (strikes == 2) {
        strikes = 0
        outs ++
    } else {
        strikes ++
    }
    updateBalls()
    updateStrikes()
    updateOuts()
}

function eventOut() {
    if (outs == 2) {
        outs = 0
        inning ++
    } else {
        outs ++
    }
    updateBalls()
    updateStrikes()
    updateOuts()
}

function updateBalls() {
    valueBalls.innerText = balls
}

function updateStrikes() {
    valueStrikes.innerText = strikes
}

function updateOuts() {
    valueOuts.innerText = outs
}
