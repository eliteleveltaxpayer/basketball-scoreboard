let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let pointsHome = 0
let pointsGuest = 0 

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


function plusOneGuest() {
    pointsGuest += 1
    guestScore.textContent = pointsGuest
}

function plusTwoGuest() {
    pointsGuest += 2
    guestScore.textContent = pointsGuest
}

function plusThreeGuest() {
    pointsGuest += 3
    guestScore.textContent = pointsGuest
}
