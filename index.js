let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let pointsHome = 0
let pointsAway = 0 

function plusOneHome() {
    pointsHome += 1
    homeScore.textContent = pointsHome
}

function plusTwoHome() {
    pointsHome += 2
    homeScore.textContent = pointsHome
}

function plusThreeHome() {
    pointsHome += 3
    homeScore.textContent = pointsHome
}


function plusOneAway() {
    pointsAway += 1
    awayScore.textContent = pointsAway
}

function plusTwoAway() {
    pointsAway += 2
    awayScore.textContent = pointsAway
}

function plusThreeAway() {
    pointsAway += 3
    awayScore.textContent = pointsAway
}
