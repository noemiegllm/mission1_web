let submitBtn = document.querySelector("#submitBtn");
let oracleAnswer = document.querySelector("#oracleAnswer");
let inputGuess = document.querySelector("#inputGuess");
let scoreBoard = document.querySelector("#scoreBoard");

const secret = Math.floor(Math.random() * 100) + 1;

let playerGuess = 0;
let triesCounter = 0;
inputGuess.value = "";
let pastTries = [];

submitBtn.addEventListener("click", () => {
    playerGuess = Number(inputGuess.value);

    if(1>playerGuess || 100<playerGuess || isNaN(playerGuess)){
        oracleAnswer.textContent = "Enter a correct value (number between 1 & 100)";
    }else{
        triesCounter++;
        pastTries.push(playerGuess);
        scoreBoard.textContent= pastTries.join(", ");

        if(playerGuess === secret){
            oracleAnswer.textContent = `Congruate ! You guess the secret number !
            You find the number ${secret} in ${triesCounter} tries`;
            submitBtn.disabled = true;
            inputGuess.disabled = true;
        }else if(0 < playerGuess && playerGuess < secret){
            oracleAnswer.textContent = "Higher";
        }else if(101 > playerGuess && playerGuess > secret){
            oracleAnswer.textContent = "Lower";
        }
    }
});

