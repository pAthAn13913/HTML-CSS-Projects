let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btn = document.getElementById("btn");
let clear = document.querySelector(".clear");
let score = document.getElementById("score");
let result = document.querySelector(".result");
let form = document.getElementById("form");


btn.addEventListener("click", () => {

    let newHiegt = parseFloat(height.value);
    let newWeigt = parseFloat(weight.value);

    newHiegt /= 100;
    let sqrHeight = newHiegt * newHiegt;
    let bmi = newWeigt / sqrHeight;

    score.innerText = bmi.toFixed(2);

    if (newHiegt && newWeigt) {

        result.style.display = "block";

        if (score.innerText < 18.6) {
            score.style.background = "#ffeaa7"
        }
        else if (score.innerText < 24.9) {
            score.style.background = "#C0EBA6"
        }
        else {
            score.style.background = "#d63031"
        }
    }
});

clear.addEventListener("click", () => {
    result.style.display = "none";
    height.value="";
    weight.value="";
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

}); 


