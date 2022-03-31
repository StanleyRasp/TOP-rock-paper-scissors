const moveIndexes = {
    "rock" : 2,
    "paper" : 1,
    "scissors" : 0
};

const indexMoves = {
    2 : "rock",
    1 : "paper",
    0 : "scissors"
};

function computersMove(){
    return Math.floor(Math.random() * 2);
}

function playersMove(){
    let input = prompt("Type in your move(rock, paper, scissors):");
    input = input.toLowerCase();
    if(moveIndexes[input] != undefined){
        return moveIndexes[input];
    }
    return -1;
}

function game(rounds){
    let playerScore = 0, computerScore = 0;
    const maxScore = Math.ceil(rounds/2);
    for (let i = 0; i < rounds; ++i){
        
        alert(
            `Round ${i+1}/${rounds}\n
        Score:\n
        Player: ${playerScore} points\n
        Computer: ${computerScore} points`
        )

        let player = playersMove();
        let computer = computersMove();

        if (player === -1){
            alert("A mistake occured, try again!")
            i--;
            continue;
        }

        alert(`Computers move: ${indexMoves[computer]}`);

        
        if ((player + 1) % 3 === computer){
            alert("You Won!");
            playerScore ++;
        } else if ((computer + 1) % 3 === player){
            alert("I Won!");
            computerScore ++;
        } else {
            alert("It's a tie, let's try again!")
            i--;
        }

        if (playerScore == maxScore){
            alert("Bravo! You won the game!")
            break;
        }
        if (computerScore == maxScore){
            alert("Ha Ha! I won the game! Let's go again.")
            break;
        }
    }
}

const inputBox = document.querySelector("#roundNumberInput");

function startGame(){
    let numberOfRounds = inputBox.value;
    inputBox.value = "";
    game(numberOfRounds);
}

inputBox.addEventListener("keydown", (event) => {if (event.key === "Enter") startGame()} )

console.log('To play, type in "game(number of rounds)."');