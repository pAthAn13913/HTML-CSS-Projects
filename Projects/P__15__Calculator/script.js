let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nin = document.querySelector("#nin");
let zero = document.querySelector("#zero");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multi = document.querySelector("#multi");
let divi = document.querySelector("#divi");
let point = document.querySelector("#point");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");

let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;


one.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '1';
    document.querySelector('#display').value = currentDisplay;
})

two.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '2';
    document.querySelector('#display').value = currentDisplay;
})

three.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '3';
    document.querySelector('#display').value = currentDisplay;
})

four.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '4';
    document.querySelector('#display').value = currentDisplay;
})

five.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '5';
    document.querySelector('#display').value = currentDisplay;
})

six.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '6';
    document.querySelector('#display').value = currentDisplay;
})

seven.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '7';
    document.querySelector('#display').value = currentDisplay;
})

eight.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '8';
    document.querySelector('#display').value = currentDisplay;
})

nin.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '9';
    document.querySelector('#display').value = currentDisplay;
})

zero.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '0';
    document.querySelector('#display').value = currentDisplay;
})

plus.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '+';
    document.querySelector('#display').value = currentDisplay;
})

minus.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '-';
    document.querySelector('#display').value = currentDisplay;
})

multi.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '*';
    document.querySelector('#display').value = currentDisplay;
})

divi.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '/';
    document.querySelector('#display').value = currentDisplay;
})

point.addEventListener("click",()=>{
    currentDisplay = currentDisplay + '.';
    document.querySelector('#display').value = currentDisplay;
})

clear.addEventListener("click",()=>{
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
})

equal.addEventListener("click",()=>{
    currentDisplay = eval(currentDisplay);
    document.querySelector('#display').value = currentDisplay;
})