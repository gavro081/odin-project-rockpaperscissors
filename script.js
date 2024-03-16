function getComputerChoice () {
    const rand = Math.random();
    if (rand < 1/3) return 'rock';
    else if (rand < 2/3) return 'paper';
    return 'scissors';
}

let isGameOver = false;

const b1 = document.querySelector('.rock');
const b2 = document.querySelector('.paper');
const b3 = document.querySelector('.scissors');

b1.addEventListener("click", () => {
    if (!isGameOver)
    playGame('rock', getComputerChoice());
})

b2.addEventListener("click", () => {
    if (!isGameOver)
    playGame('paper', getComputerChoice());
})

b3.addEventListener("click", () => {
    if (!isGameOver)
    playGame('scissors', getComputerChoice());
})

const div = document.createElement("div");

div.classList.add("player-score");

document.body.appendChild(div);

let score = {
    wins: 0,
    losses: 0,
    draws: 0
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
    
    const win = playRound(playerMove, getComputerChoice());
    
    if (win === 'W') score.wins++;
    else if (win === 'L') score.losses++;
    else score.draws++;
    
    div.innerText = `Player: ${score.wins}, Computer: ${score.losses}, Draws: ${score.draws}\n`;

    const winner = document.createElement("h1");
    if (score.wins === 5) {
        winner.innerText = 'YOU WON!';
        isGameOver = true;
    }
    if (score.losses === 5) {
        winner.innerText = 'YOU LOST!'; 
        isGameOver = true;
    }

    if (isGameOver) {
        b1.classList.remove('rock');
        b2.classList.remove('paper');
        b3.classList.remove('scissors');
    }
    winner.classList.add('game-result');

    document.body.appendChild(winner);

}

