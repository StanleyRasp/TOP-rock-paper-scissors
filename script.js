let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

let playerDamage = 0;
let computersDamage = 0;

let interactable = true;

function setup(){
    weapons = Array.from(document.querySelectorAll(".toolbox img"));
    for (let weapon of weapons){
        let topOffset = weapon.offsetTop;
        let leftOffset = weapon.offsetLeft;
        weapon.style.top = `${topOffset}px`
        weapon.style.left = `${leftOffset}px`
    }
}

function computersMove() {
    return Math.floor(Math.random() * 3 - (1e-6));
}

function moveWeapons(playerVal, computerVal){
    interactable = false;
    let humanWeapons = Array.from(document.querySelectorAll(".human img"));
    humanWeapons.reverse();
    humanWeapons[playerVal].classList.add("onArena");

    let computerWeapons = Array.from(document.querySelectorAll(".computer img"));
    computerWeapons.reverse();
    computerWeapons[computerVal].classList.add("onArena");
}

function resetWeapons(){
    weapons = Array.from(document.querySelectorAll(".toolbox img"));
    for (let weapon of weapons){
        weapon.classList.remove("onArena")
    }
    console.log(weapons);
    interactable = true;

}


function round(event){
    let playerVal = event.path[0].dataset.value;
    let computerVal = computersMove();
    console.log(`${playerVal}, ${computerVal}`)

    moveWeapons(playerVal, computerVal);

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

    setTimeout(() => {resetWeapons()}, 2000);
}

setup();

rockButton.addEventListener("click", (event) => {if(interactable) {
    document.querySelector("#rock-button img").style.transform = "scale(100%)"
    round(event);
}});
paperButton.addEventListener("click", (event) => {if(interactable) {
    document.querySelector("#paper-button img").style.transform = "scale(100%)"
    round(event);
}});
scissorsButton.addEventListener("click", (event) => {if(interactable) {
    document.querySelector("#scissors-button img").style.transform = "scale(100%)"
    round(event);
}});

rockButton.addEventListener("mouseover", (event) => {if(interactable) {
    document.querySelector("#rock-button img").style.transform = "scale(110%)"
}});
paperButton.addEventListener("mouseover", (event) => {if(interactable) {
    document.querySelector("#paper-button img").style.transform = "scale(110%)"
}});
scissorsButton.addEventListener("mouseover", (event) => {if(interactable) {
    document.querySelector("#scissors-button img").style.transform = "scale(110%)"
}});

rockButton.addEventListener("mouseout", (event) => {if(interactable) {
    document.querySelector("#rock-button img").style.transform = "scale(100%)"
}});
paperButton.addEventListener("mouseout", (event) => {if(interactable) {
    document.querySelector("#paper-button img").style.transform = "scale(100%)"
}});
scissorsButton.addEventListener("mouseout", (event) => {if(interactable) {
    document.querySelector("#scissors-button img").style.transform = "scale(100%)"
}});