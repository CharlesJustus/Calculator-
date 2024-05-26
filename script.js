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