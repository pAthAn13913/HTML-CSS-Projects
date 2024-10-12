let userScore = 0;
let compScore = 0;
let drow = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");




choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});



const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    console.log("Your choice = ",userChoice);
    console.log("Comp choice",compChoice);

    winCheck(userChoice, compChoice);
}

const winCheck = (userChoice, compChoice) => {
    let userWin = true;

    if (userChoice === compChoice) {
        drow++;
        msg.innerText = "Drow!"
        msg.style.backgroundColor = "#081b31";

        console.log("drow! ",drow);
    }
    else {
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green";

        console.log("win!");
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";

        console.log("lose!");
    }
}



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const raandIdx = Math.floor(Math.random() * 3);
    return options[raandIdx];
}