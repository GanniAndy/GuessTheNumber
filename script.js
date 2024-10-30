/*
    Guess the number: Steps.

    1.Generate a random number between 1 and 100
    2.Register the number of the try that the player have
    3.Give the player a form of guessing ,stat of the number
    4.If the number is written ,save for the player to see his previous tries
    5.Next up check if the number is correct.
    6.If it's correct :
        I.Show a message of congratulation
        II.Don't allow the player to introduce more tries.
        III. Show a play again button.
    7.If it is incorrect and the player still has tries :
        I.Tell the player he failed
        II.Let the player retry.
        III.Each time he failed increase the number of tries.
    8.If the player fails and he doesn't have more tries :
        I.Tell the player he has no more tries.
        II.Don't let the player put more numbers.
        III.Make a button to let the player restart the game.
    9.Once the game restarts make sure that the logic of the game and the UI resets.
    Then u get back to step number 1.
*/
/* generating the random number*/
let randomNumber = Math.floor(Math.random()*100) + 1;
/*Creating the necessary elements*/
const guesses  = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

/* Guess count variable*/
let guessCount = 1;
let resetButton;

/* Function for  make sure if we guessed or not the number  */

function checkGuess(){

    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previous attempts: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = " Congratulation!U guessed it!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();

    } else if(guessCount === 10) {
        lastResult.textContent = "Game over!"
        setGameOver();

    } else{
        lastResult.textContent = " Incorrect!";
        lastResult.style.backgroundColor = "red";
        /*We make sure if the number is higher or lower*/
        if(userGuess < randomNumber){
            lowOrHi.textContent = "The number is very low";
        }else if (userGuess > randomNumber){
            lowOrHi.textContent = "The number is very high";
        }
    }


    guessCount++;
    guessField.value = "";
    guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);


function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent =  "Start a new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}
function resetGame(){

    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");

    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;

    //location.reload(); //Easy way, it reloads the whole page =D


}

