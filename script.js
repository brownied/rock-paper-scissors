

function getComputerChoice(){
    let randInt = getRandomInt(3);
    switch(randInt){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
    human = humanChoice.toLowerCase();
    computer = computerChoice.toLowerCase();

    if (human == "rock") {
        if (computer == "rock"){
            console.log("Tie game. rock v rock");
        }
        if (computer == "scissors") {
            console.log("You win. rock v scissors")
            humanScore++;
        }
        if (computer == "paper"){
            console.log("You lose. rock v paper");
            computerScore++;
        }
    }

    else if (human == "paper"){
        if (computer == "rock"){
            console.log("winner");
            humanScore++;
        }
        if (computer == "scissors"){
            console.log("loser");
            computerScore++;
        }

        if (computer == "paper"){
            console.log('tie game');
        }
    }

    else {
        if (computer == "scissors"){
            console.log("tie game");
        }

        if (computer == "paper"){
            console.log("winner");
            humanScore++;
        }
        
        else{
            console.log("loser");
            computerScore++;
        }
    }

}

    for (let i = 0; i < 5; i++){
        h = getHumanChoice();
        c = getComputerChoice();
        playRound(h, c);
    }

    if (humanScore > computerScore){
        alert("You win");
    }
    else{
        alert("You lost, idiot");
    }


}

playGame();


