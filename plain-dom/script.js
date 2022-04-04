console.log("attached")
let balls   = 0
let strikes = 0
let outs    = 0
let inning  = 1
let atBat   = 0
let score = [Array(6).fill(0), Array(6).fill(0)]

const buttonSwingMiss = document.querySelector("#swing-miss")
const buttonEventOut  = document.querySelector("#event-out")
const buttonHomerun   = document.querySelector("#homerun")
const buttonBall  = document.querySelector("#ball")

const valueBalls    = document.querySelector(".balls-value")
const valueStrikes  = document.querySelector(".strikes-value")
const valueOuts     = document.querySelector(".outs-value")
const multiInning   = document.querySelectorAll(".inning")

const homeScore = document.querySelector(".score-row.home").children
const awayScore = document.querySelector(".score-row.away").children

buttonSwingMiss.addEventListener('click', swingMiss)
buttonEventOut.addEventListener('click', eventOut)
buttonHomerun.addEventListener('click', homerun)
buttonBall.addEventListener('click', ball)


function swingMiss() {
    if (strikes == 2) {
        strikes = 0
        incrementOut()
    } else {
        strikes ++
    }
    
    updateAll()
}

function ball() {
    if (balls === 3) {
        strikes = 0
        balls = 0
        // updateAll()
    } else {
        balls++
    }
    updateAll()
}

function eventOut() {
    incrementOut()

    updateAll()
}

function homerun() {
    incrementCurrentScore()
    
    updateAll()
}

function updateAll() {
    updateBalls()    // never changes innings, outs
    updateStrikes()  // never changes runs
    updateOuts()     // never changes runs
    updateInning()   // never changes runs
    updateRuns()     // never changes innings, outs; only needs current inning
}

function incrementOut() {
    if (outs < 2) {
        outs ++
        return
    }
    outs = 0
    if (atBat == 1) {
        atBat = 0
        inning ++
        return
    } else {
        atBat = 1
        return
    }
}

function incrementCurrentScore() {
    score[atBat][inning - 1] ++
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

function updateInning() {
    multiInning.forEach(elem => elem.innerText = "")
    multiInning.item(inning - 1).innerText = "*"
}

function updateRuns() {
    score[0].forEach((value, index) => {
        homeScore.item(index + 1).innerText = value
    })
    score[1].forEach((value, index) => {
        awayScore.item(index + 1).innerText = value
    })
}