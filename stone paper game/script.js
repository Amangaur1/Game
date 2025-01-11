let playerScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playerScorePara = document.querySelector("#player-score");
const compuScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "orange";
}

const showWinner = (playerWin, playerChoice, compChoice) => {

    if (playerWin) {
        playerScore++;
        playerScorePara.innerText = playerScore;
        msg.innerText = `You Win. Your ${playerChoice} beats; ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compuScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats; ${playerChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playerGame = (playerChoice) => {
    const compChoice = gencompchoice();

    if (playerChoice === compChoice) {
        drawGame();
    } else {
        let playerWin = false;
        if (playerChoice === "rock") {
            playerWin = compChoice === "scissors";
        } else if (playerChoice === "paper") {
            playerWin = compChoice === "rock";
        } else if (playerChoice === "scissors") {
            playerWin = compChoice === "paper";
        }
        showWinner(playerWin, playerChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id");
        playerGame(playerChoice);
    });
});
