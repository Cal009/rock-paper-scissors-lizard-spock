//Getting references to DOM elements

const buttons = document.getElementsByClassName("control");
const playerChoiceDisplay = document.getElementsByClassName("player_choice")[0]
const computerChoiceDisplay = document.getElementsByClassName("computer_choice")[0]
const playerImage = document.getElementById("player_image")
const computerImage = document.getElementById("computer_image")
const playerScoreDisplay = document.getElementById("user_score")
const computerScoreDisplay = document.getElementById("cpu_score")
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const message = document.getElementsByClassName("message");
let userScore = 0;
let computerScore = 0;

//Creating event listener for all buttons
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

//Function to enable player and computer choice and display correct image
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() *5)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

}

//Function to determine the winner
function checkWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "tie";
    } else if (
        (computerChoice === "Rock" && (playerChoice === "Scissors" || playerChoice === "Lizard")) ||
        (computerChoice === "Paper" && (playerChoice === "Rock" || playerChoice === "Spock")) ||
        (computerChoice === "Scissors" && (playerChoice === "Paper" || playerChoice === "Lizard")) ||
        (computerChoice === "Lizard" && (playerChoice === "Spock" || playerChoice === "Paper")) ||
        (computerChoice === "Spock" && (playerChoice === "Rock" || playerChoice === "Scissors"))
    ) {
        return "computer";
    } else {
        return "player";
    }
}

// Function to update scores and display winner
function updateScores(result) {
    let msg = "";
    if (result === "player") {
        userScore++;
        msg = "Well done... You Won!";
    } else if (result === "computer") {
        computerScore++;
        msg = "Unlucky... The computer Won."
    }
    else {
        msg = "Its a tie.";
    }
    playerScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    message[0].textContent = msg;
}