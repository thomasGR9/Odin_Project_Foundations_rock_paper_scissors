const rck = document.querySelector('#rock');
const ppr = document.querySelector('#paper');
const scrs = document.querySelector('#scissors');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const endResult = document.querySelector('#endResult');
const buttons = document.querySelectorAll('button');
const aScore = document.createElement('div');
const whoWon = document.createElement('div');
const endRes = document.createElement('div');
result.appendChild(whoWon);
score.appendChild(aScore);
endResult.appendChild(endRes);


let playerWins = 0;
let computerWins = 0;


let playerSelection;


function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
let rand = Math.random();
rand *= options.length;
rand = Math.floor(rand);
return options[rand];
}


let computerSelection ;



function keepScore(playerWins,computerWins) {
    let score = `You ${playerWins} - ${computerWins} Computer`;
    return score;

}

function scoreColors (playerWins, computerWins) {
    if (playerWins > computerWins) {
        score.style.backgroundColor = 'green';
    } else if (playerWins < computerWins) {
        score.style.backgroundColor = 'red';  
    } else {
        score.style.backgroundColor = 'black';
    }
}




function playRound(playerSelection,computerSelection) {
    
    getComputerChoice();
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerWins > 4 || computerWins > 4) {
        return;
    }
    

if (playerSelection == computerSelection) {
    whoWon.textContent = "draw"; 
    result.style.backgroundColor = 'black';
}
   
else {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWins = computerWins +1;
            whoWon.textContent = "You lost.Paper wins rock!"; 
            result.style.backgroundColor = 'red';
             }

        else {
            playerWins = playerWins +1;
            whoWon.textContent = "You won.Rock beats scissors!";
            result.style.backgroundColor = 'green';
        }    
        
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins = playerWins +1;
            whoWon.textContent = "You won.Paper beats rock";
            result.style.backgroundColor = 'green';
        }
        else {
            computerWins = computerWins +1;
            whoWon.textContent = "You lost.Scissor beats paper";
            result.style.backgroundColor = 'red';
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins = computerWins +1;
            whoWon.textContent = "You lost.Rock beats scissors";
            result.style.backgroundColor = 'red';
        }
        else {
            playerWins = playerWins +1;
            whoWon.textContent = "You won.Scissors beats paper";
            result.style.backgroundColor = 'green';
        }
    }
}
console.log(keepScore(playerWins,computerWins));
scoreColors (playerWins, computerWins);
aScore.textContent = keepScore(playerWins,computerWins);

if (playerWins == 5) {
    endRes.textContent = "You won !!!";
    endResult.style.backgroundColor = 'green';

}

if (computerWins == 5) {
    endRes.textContent = "You lost !!!";  
    endResult.style.backgroundColor = 'red';
}

}



rck.addEventListener('click', () => {
    playerSelection = "rock";
    return playRound(playerSelection,computerSelection);

   
});


ppr.addEventListener('click', () => {
    playerSelection = "paper";
    return playRound(playerSelection,computerSelection);
});

scrs.addEventListener('click', () => {
    playerSelection = "scissors";
    return playRound(playerSelection,computerSelection);
});



