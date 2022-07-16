function computersMove() {
    return Math.floor(Math.random() * 3 - (1e-6));
}

function checkRandomness() {
    let occurances = [0, 0, 0];
    for(let i = 0; i < 1e4; i++){
        occurances[computersMove()] ++;
    }

    console.log(`${occurances[0] / 1e4} \n ${occurances[1] / 1e4} \n ${occurances[2] / 1e4}`);
}

let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

let playerDamage = 0;
let computersDamage = 0;

function round(event){
    let playerVal = event.path[0].dataset.value;
    let computerVal = computersMove();
    console.log(`${playerVal}, ${computerVal}`)
    if ((playerVal + 1) % 3 == computerVal){
        computersDamage ++;
        console.log("Human won")
    } else if ((computerVal + 1) % 3 == playerVal){
        playerDamage ++;
        console.log("Computer won")
    } else {
        console.log("It's a tie");
        // tie
    }
}

rockButton.addEventListener("click", round);
paperButton.addEventListener("click", round);
scissorsButton.addEventListener("click", round);