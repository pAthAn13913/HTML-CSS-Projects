let bat = document.querySelector("#bat");
let ball = document.querySelector("#ball");
let stamp = document.querySelector("#stamp");
let resbtn = document.querySelector("#resbtn");
let totalbtn = document.querySelector("#totalbBtn");


let totalMatch=0;
let score;
let scoreStr = localStorage.getItem('Score');
resetScore(scoreStr);


bat.addEventListener("click", () => {
    let computerChoice = generateComputerChoice();

    let resultMsg = getResult('Bat', computerChoice);
    showResult('Bat', computerChoice, resultMsg);

});

ball.addEventListener("click", () => {
    computerChoice = generateComputerChoice();

    resultMsg = getResult('Ball', computerChoice);
    showResult('Ball', computerChoice, resultMsg);
});

stamp.addEventListener("click", () => {
    computerChoice = generateComputerChoice();

    resultMsg = getResult('Stump', computerChoice);
    showResult('Stump', computerChoice, resultMsg);
});

resbtn.addEventListener("click", () => {
    localStorage.clear()
    resetScore();
    totalbBtn.innerText = `Total Match 0`;
    totalMatch = 0;
});



function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };

    score.displayScore = function () {
        
        return `Score: Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
    };

    showResult();
}


function showResult(userMove, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-move').innerText =
        userMove ? `You have chosen is ${userMove}` : '';

    document.querySelector('#computer-move').innerText =
        computerMove ? `Computer choice is ${computerMove}` : '';

    document.querySelector('#result').innerText = result || '';

    document.querySelector('#score').innerText = score.displayScore();

    totalbBtn.innerText = `Total Match ${totalMatch}`;
}


function getResult(userMove, computerMove) {


    if (userMove === computerMove) {
        score.tie++;
        totalMatch++;
        return `It's a tie`;
    }

    else if (userMove === 'Bat') {

        if (computerMove === 'Ball') {
            score.win++;
            totalMatch++;
            return 'User won.';
        } else if (computerMove === 'Stump') {
            score.lost++;
            totalMatch++;
            return 'Computer has won';

        }                       
    }

    else if (userMove === 'Ball') {

        if (computerMove === 'Stump') {
            score.win++;
            totalMatch++;
            return 'User won.';
        } else if (computerMove === 'Bat') {
            score.lost++;
            totalMatch++;
            return 'Computer has won';

        }
    }
    else if (userMove === 'Stump') {

        if (computerMove === 'Bat') {
            score.win++;
            totalMatch++;
            return 'User won.';
        } else if (computerMove === 'Ball') {
            score.lost++;
            totalMatch++;
            return 'Computer has won';

        }
    }
}



function generateComputerChoice() {

    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump'
    }
}