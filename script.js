let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

let humanDamage = 0;
let computerDamage = 0;

let interactable = true;

function damageHuman(){
    humanDamage++;
    setTimeout(() => {document.querySelector(":root").style.setProperty("--human-background-opacity", "0.2")}, 1000);
    setTimeout(() => {document.querySelector(".human").style.backgroundImage = `url("images/human-images/human-${humanDamage}-dmg.png")`}, 1700);
    setTimeout(() => {document.querySelector(":root").style.setProperty("--human-background-opacity", "0.6")}, 1900);
}

function damageComputer(){
    computerDamage++;
    setTimeout(() => {document.querySelector(":root").style.setProperty("--computer-background-opacity", "0.2")}, 1500);
    setTimeout(() => {document.querySelector(".computer").style.backgroundImage = `url("images/computer-images/computer-${computerDamage}-dmg.png")`}, 1700);
    setTimeout(() => {document.querySelector(":root").style.setProperty("--computer-background-opacity", "0.6")}, 1900);
}

function updateDamage(){
    document.querySelector(".human").style.backgroundImage = `url("images/human-images/human-${humanDamage}-dmg.png")`;
    document.querySelector(".computer").style.backgroundImage = `url("images/computer-images/computer-${computerDamage}-dmg.png")`;
}

function setup(){
    weapons = Array.from(document.querySelectorAll(".toolbox img"));
    for (let weapon of weapons){
        let topOffset = weapon.offsetTop;
        let leftOffset = weapon.offsetLeft;
        weapon.style.top = `${topOffset}px`
        weapon.style.left = `${leftOffset}px`
    }

    updateDamage();

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
        damageComputer();
    } else if ((computerVal + 1) % 3 == playerVal){
        damageHuman();
    } else {
        console.log("It's a tie");
    }

    setTimeout(resetWeapons, 2000);
}

setup();