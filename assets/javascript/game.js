/* Global variables */

// Variables for the game

let numWins = 0, numLosses = 0;

// Variables for the player

let answer;
let guesses_array, guesses_string, numTriesLeft;



/* Start a new game when the page loads for the first time */

function startNewGame() {

    // Create a random letter between a and z

    answer = String.fromCharCode(Math.floor(26 * Math.random()) + 97);


    // Display the answer

    $("#answer").text(answer);

    // Reset variables

    guesses_array  = [];
    guesses_string = "";
    numTriesLeft   = 10;

    // Display variables

    $("#numWins").text(numWins);
    $("#numLosses").text(numLosses);
    $("#numTriesLeft").text(numTriesLeft);
    $("#guesses").text(guesses_string);
}

    $(document).ready(function() {

    startNewGame();

    
    /* Respond to player's actions */


    $(document).on("keypress", event => {

        // Find out which key was pressed

        const yourGuess = String.fromCharCode(event.which).toLowerCase();

        if ("a" <= yourGuess && yourGuess <= "z") {

            // Check if the guess has yet to be made

            if (!guesses_array.includes(yourGuess)) {
                numTriesLeft--;

                $("#numTriesLeft").text(numTriesLeft);
                
                // Record the letter

                guesses_array.push(yourGuess);
                guesses_string += yourGuess;

                $("#guesses").text(guesses_string);

                // Alert if the player has guessed the letter correctly

                if (yourGuess === answer) {
                    numWins++;
                    alert("YES!! GREAT JOB.....YOU WON!!!");
                    startNewGame();

               
                // Alert if the player has run out of guesses or lost game

                } else if (numTriesLeft === 0) {
                    numLosses++;
                    alert("NO LUCK! ....YOUR NOT WORTHY!......Lets start over.");
                    startNewGame();   

                }
            }
        }
    });
});