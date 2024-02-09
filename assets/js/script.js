const buttons = document.getElementsByClassName("control");
const playerChoiceDisplay = document.getElementsByClassName("player_choice")
const computerChoiceDisplay = document.getElementsByClassName("computer_choice")
const playerImage = document.getElementByid("player_image")
const computerImage = document.getElementById("computer_image")
const playerScore = document.getElementsByClassName("user_score span")
const computerScore = document.getElementsByClassName("computer_score span")
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice)
    })
}


