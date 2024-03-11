function getComputerChoice () {
    const rand = Math.random();
    if (rand < 1/3) return 'rock';
    else if (rand < 2/3) return 'paper';
    return 'scissors';
}

function playRound (playerChoice, computerChoice) {
    
    let win;

    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') win = 'L';
        else if (computerChoice === 'scissors') win = 'W';
        else win = 'D';
    }


    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') win = 'W';
        else if (computerChoice === 'scissors') win = 'L';
        else win = 'D';
    }


    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') win = 'W';
        else if (computerChoice === 'rock') win = 'L';
        else win = 'D';
    }
    
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);


    if (win === 'W') console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    else if (win === 'L') console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    else console.log(`It's a Tie. You both picked ${playerChoice}`);
    
    return win;
}

function playGame (playerMove){
    
    let score = {
        wins: 0,
        losses: 0,
        draws: 0
    }

    for (let i = 0; i < 5; i++){
        let playerMove = prompt ('Enter Rock, Paper or Scissors!');
        let result = playRound(playerMove,getComputerChoice());
        if (result === 'W') score.wins++;
        else if (result === 'L') score.losses++;
        else score.draws++; 
    }

    console.log(score);

}

playGame();