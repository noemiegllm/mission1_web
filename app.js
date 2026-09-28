const submitBtn = document.querySelector("#submitBtn");
const restartBtn = document.querySelector("#restartBtn");
let oracleAnswer = document.querySelector("#oracleAnswer");
let inputGuess = document.querySelector("#inputGuess");
let scoreBoard = document.querySelector("#scoreBoard");

const secret = Math.floor(Math.random() * 100) + 1;

let playerGuess = 0;
let triesCounter = 0;
let pastTries = [];
inputGuess.value = "";

/*** FUNCTION ***/
function OracleAnswer(secretNumber, playerNumber){
    inputGuess.value = "";
    if(playerNumber === secretNumber){
        frontAnswer("success");
        oracleAnswer.textContent = `Congruate ! You guess the secret number !
            You find the number ${secretNumber} in ${triesCounter} tries`;
    }else if(playerNumber < secretNumber){
        oracleAnswer.textContent = "Higher";
        frontAnswer();
    }else{
        frontAnswer();
        oracleAnswer.textContent = "Lower";
    }
}

function frontAnswer(result){
    if(result === "success"){
        oracleAnswer.classList.add("success");
        submitBtn.disabled = true;
        inputGuess.disabled = true;
    }else if(result === "error"){
        oracleAnswer.classList.add("error");
    }else{
        oracleAnswer.classList.remove("success", "error");
    }
}

//*** LISTENER ***/
submitBtn.addEventListener("click", () => {
    playerGuess = Number(inputGuess.value);

    if(1>playerGuess || 100<playerGuess || isNaN(playerGuess)){
        frontAnswer("error");
        oracleAnswer.textContent = "Enter a correct value (number between 1 & 100)";
    }else{
        triesCounter++;
        pastTries.push(playerGuess);
        scoreBoard.textContent= pastTries.join(", ");
        OracleAnswer(secret, playerGuess);
    }
});

//"Enter" keyboard action
inputGuess.addEventListener("keydown", (event) => {  //event = all info on all the keys pressed (letters, maj, ctrl,...)
    if (event.key === "Enter") { // .key to find the text value of the key
        submitBtn.click();
    }
});

restartBtn.addEventListener("click", () => {
    location.reload();
});