function computersMove(){
    return Math.floor(Math.random() * 2)
}

function playersMove(){
    let input = prompt("Type in your move(rock, paper, scissors):")
    input.toLowerCase();
    switch (input){
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2;
        default:
            return -1;
    }
}