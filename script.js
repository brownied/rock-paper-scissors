function getComputerChoice(){
    let randInt = getRandomInt(3);
    switch(randInt){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

