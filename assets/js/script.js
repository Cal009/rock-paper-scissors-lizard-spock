const buttons = document.getElementsByClassName("control");
const playerChoiceDisplay = document.getElementsByClassName("player_choice")
const computerChoiceDisplay = document.getElementsByClassName("computer_choice")
const playerImage = document.getElementById("player_image")
const computerImage = document.getElementById("computer_image")
const playerScore = document.getElementsByClassName("user_score span")
const computerScore = document.getElementsByClassName("computer_score span")
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice)
    })
}

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() *5)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

}
