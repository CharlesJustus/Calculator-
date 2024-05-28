function add(num1,num2){
    let ans = num1 + num2;
};
function sub(num1,num2){
    let ans = num1 - num2;
};
function multiply(num1,num2){
    let ans = num1 * num2;
};
function divide(num1,num2){
    let ans = num1 / num2;
};

let firstNum;
let operator;
let secondNum;
let displayNums = '';
let disOne;
let disTwo;
let op;

function operate(num1,operator,num2){
    if(operator === '+'){
        add(num1,num2);
    }
    else if(operator === '-'){
        sub(num1,num2);
    }
    else if(operator === '*'){
        multiply(num1,num2);
    }
    else if(operator === '/'){
        divide(num1,num2);
    }

}
const buttons = document.querySelectorAll('button');
const displayDiv = document.querySelector('#mainDisplay');
displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;



document.querySelector('#one').addEventListener('click',()=>{if(disOne === undefined){disOne = 1;} else if (op === undefined){disOne = "" + disOne + 1} else if (disTwo === undefined){disTwo = 1;}else{disTwo = "" + distTwo + 1 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#two').addEventListener('click',()=>{if(disOne === undefined){disOne = 2;}else if(disTwo === undefined){disTwo = 2;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#three').addEventListener('click',()=>{if(disOne === undefined){disOne = 3;}else if(disTwo === undefined){disTwo = 3;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#four').addEventListener('click',()=>{if(disOne === undefined){disOne = 4;}else if(disTwo === undefined){disTwo = 4;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#five').addEventListener('click',()=>{if(disOne === undefined){disOne = 5;}else if(disTwo === undefined){disTwo = 5;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#six').addEventListener('click',()=>{if(disOne === undefined){disOne = 6;}else if(disTwo === undefined){disTwo = 6;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#seven').addEventListener('click',()=>{if(disOne === undefined){disOne = 7;}else if(disTwo === undefined){disTwo = 7;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#eight').addEventListener('click',()=>{if(disOne === undefined){disOne = 8;}else if(disTwo === undefined){disTwo = 8;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// document.querySelector('#nine').addEventListener('click',()=>{if(disOne === undefined){disOne = 9;}else if(disTwo === undefined){disTwo = 9;} displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
// displayDiv.innerText = displayNums;