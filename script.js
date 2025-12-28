

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

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const leftScore = document.querySelector(".Lscore-text");
const rightScore = document.querySelector('.Rscore-text');
let humanText = document.createElement('span');
let computerText = document.createElement('span');

leftScore.appendChild(humanText);
rightScore.appendChild(computerText);

humanText.textContent = humanScore
computerText.textContent = computerScore


const buttons = document.querySelector('.button-container');

buttons.addEventListener('click', (e) => {
    hc = "";
    let target = e.target;
    switch (target.id){
        case "rock":
            hc = "rock";
            break;
        case "paper":
            hc = "paper";
            break;
        case "scissors":
            hc = "scissors";
            break;
    }
    playRound(hc, getComputerChoice());
});


function playRound(humanChoice, computerChoice){
    human = humanChoice.toLowerCase();
    computer = computerChoice.toLowerCase();

    if (human == "rock") {
        if (computer == "rock"){
            result.textContent = "Tie Round."
        }
        if (computer == "scissors") {
            result.textContent ="Round Won."
            humanScore++;
        }
        if (computer == "paper"){
            result.textContent="Round Lost."
            computerScore++;
        }
    }

    else if (human == "paper"){
        if (computer == "rock"){
            result.textContent = "Round Won."
            humanScore++;
        }
        if (computer == "scissors"){
            result.textContent = "Round Lost."
            computerScore++;
        }

        if (computer == "paper"){
            result.textContent = "Tie Round."
        }
    }

    else {
        if (computer == "scissors"){
            result.textContent = "Tie Round."
        }

        if (computer == "paper"){
            result.textContent = "Round Won."
            humanScore++;
        }
        
        else{
            result.textContent = "Round Lost."
            computerScore++;
        }
    }

    humanText.textContent = humanScore;
    computerText.textContent = computerScore;

    if (humanScore == 5){
        result.textContent = "You Win!"
        buttons.remove();
    }

    if (computerScore == 5){
        result.textContent = "Computer Win."
        buttons.remove();
    }
    
}




