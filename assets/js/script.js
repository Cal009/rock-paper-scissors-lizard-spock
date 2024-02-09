//Getting references to DOM elements

const buttons = document.getElementsByClassName("control");
const playerChoiceDisplay = document.getElementsByClassName("player_choice")[0]
const computerChoiceDisplay = document.getElementsByClassName("computer_choice")[0]
const playerImage = document.getElementById("player_image")
const computerImage = document.getElementById("computer_image")
const playerScoreDisplay = document.getElementsByClassName("user_score")[0]
const computerScoreDisplay = document.getElementsByClassName("cpu_score")[0]
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
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