var randomNumber = 0;
var crystalNumber = 0;
var score = 0;
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

var win = 0;
var loss = 0;
min = 12;
max = 120;
// when the document is ready or first opened, these objects will be given the values of the equations they are equal to.
$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#rngGenerator").text("The number to match is: " + randomNumber);
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
// function to reset var values on each round.
    function resetGame() {
        yellowCrystal = Math.floor(Math.random() * 12) + 1;
        blueCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        redCrystal = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * 102) + 19;
        score = 0;
        $("#rngGenerator").text("The number to match is: " + randomNumber);
        
    }


// the instructions for all the crystals will be the same as red crystal, and the loss conditions will be similar
// to the win conditions for future reference
// on click function for the red crystal that adds the value of red crystal to the score display
    $("#redCrystal").on("click", function () {

        score = redCrystal + score
        $("#totalScoreDisplay").text("Score: " + score)
// conditions set if a player clicks on the red crystal and happens to win
        if (score == randomNumber) {
// The win counter will go up
            win++
// this is where the win counter will display the interval of wins 
            $("#win").text("Wins: " + win)
// Displays a message in the score display under the win conditions
            alert("YOU WIN!")
            $("#totalScoreDisplay").text("Score: 0")
// when the player wins a game, this function call will reset the game not including the score
// so the player can keep track of how may times they have won or lost.
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            // write losses to page
            alert("YOU LOSE!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }


    })

    $("#blueCrystal").on("click", function () {

        score = blueCrystal + score
        $("#totalScoreDisplay").text("Score: " + score)
        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            alert("YOU WIN!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            alert("YOU LOSE!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);  
            }
        }

    })

    $("#greenCrystal").on("click", function () {

        score = greenCrystal + score
        $("#totalScoreDisplay").text("Score: " + score)

        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            alert("YOU WIN!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            alert("YOU LOSE!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }

    })

    $("#yellowCrystal").on("click", function () {

        score = yellowCrystal + score
        $("#totalScoreDisplay").text("Score: " + score)

        if (score == randomNumber) {
            win++
            $("#win").text("Wins: " + win)
            alert("YOU WIN!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }
        if (score > randomNumber) {
            loss++
            $("#loss").text("Losses: " + loss)
            alert("YOU LOSE!")
            $("#totalScoreDisplay").text("Score: 0")
            resetGame();{
                yellowCrystal = Math.floor(Math.random() * 12) + 1;
                blueCrystal = Math.floor(Math.random() * 12) + 1;
                greenCrystal = Math.floor(Math.random() * 12) + 1;
                redCrystal = Math.floor(Math.random() * 12) + 1;
                randomNumber = Math.floor(Math.random() * 102) + 19;
                score = 0;
                $("#rngGenerator").text("The number to match is: " + randomNumber);
            }
        }

    })

});