function add(num1,num2){
    disOne = num1 + num2;
};
function sub(num1,num2){
    disOne = num1 - num2;
};
function multiply(num1,num2){
    disOne = num1 * num2;
};
function divide(num1,num2){
    disOne = num1 / num2;
};

let firstNum;
let operator;
let secondNum;
let displayNums = '';
let disOne = '';
let disTwo = '';
let op = '';

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
    disTwo = '', op = '';
}
const buttons = document.querySelectorAll('button');
const displayDiv = document.querySelector('#mainDisplay');
displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;



document.querySelector('#one').addEventListener('click',()=>{if(disOne === ''){disOne = 1;} else if (op === ''){disOne = "" + disOne + 1} else if (disTwo === ''){disTwo = 1;}else {disTwo = "" + disTwo + 1 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#two').addEventListener('click',()=>{if(disOne === ''){disOne = 2;} else if (op === ''){disOne = "" + disOne + 2} else if (disTwo === ''){disTwo = 2;}else{disTwo = "" + disTwo + 2 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#three').addEventListener('click',()=>{if(disOne === ''){disOne = 3;} else if (op === ''){disOne = "" + disOne + 3} else if (disTwo === ''){disTwo = 3;}else{disTwo = "" + disTwo + 3 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#four').addEventListener('click',()=>{if(disOne === ''){disOne = 4;} else if (op === ''){disOne = "" + disOne + 4} else if (disTwo === ''){disTwo = 4;}else{disTwo = "" + disTwo + 4 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#five').addEventListener('click',()=>{if(disOne === ''){disOne = 5;} else if (op === ''){disOne = "" + disOne + 5} else if (disTwo === ''){disTwo = 5;}else{disTwo = "" + disTwo + 5 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#six').addEventListener('click',()=>{if(disOne === ''){disOne = 6;} else if (op === ''){disOne = "" + disOne + 6} else if (disTwo === ''){disTwo = 6;}else{disTwo = "" + disTwo + 6 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#seven').addEventListener('click',()=>{if(disOne === ''){disOne = 7;} else if (op === ''){disOne = "" + disOne + 7} else if (disTwo === ''){disTwo = 7;}else{disTwo = "" + disTwo + 7 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#eight').addEventListener('click',()=>{if(disOne === ''){disOne = 8;} else if (op === ''){disOne = "" + disOne + 8} else if (disTwo === ''){disTwo = 8;}else{disTwo = "" + disTwo + 8 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#nine').addEventListener('click',()=>{if(disOne === ''){disOne = 9;} else if (op === ''){disOne = "" + disOne + 9} else if (disTwo === ''){disTwo = 9;}else{disTwo = "" + disTwo + 9 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#zero').addEventListener('click',()=>{if(disOne === '' || disOne === 0){disOne = 0;} else if (op === ''){disOne = "" + disOne + 0} else if (disTwo === ''){disTwo = '';}else{disTwo = "" + disTwo + 0 } displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});


document.querySelector('#add').addEventListener('click',()=>{ op = '+'; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#sub').addEventListener('click',()=>{ op = '-'; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#divide').addEventListener('click',()=>{ op = '/'; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#multiply').addEventListener('click',()=>{ op = '*'; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});

document.querySelector('#clr').addEventListener('click', ()=>{ disOne = '', disTwo = '', op = ''; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;});
document.querySelector('#ent').addEventListener('click',()=>{

// if (op === '+'){ disOne = disOne + disTwo , disTwo = '', op = ''; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;}
// else if (op === '-'){ disOne = disOne - disTwo , disTwo = '', op = ''; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;}
// else if (op === '/'){ disOne = disOne / disTwo , disTwo = '', op = ''; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;}
// else if (op === '*'){ disOne = disOne * disTwo , disTwo = '', op = ''; displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;}

operate(disOne,op,disTwo);
displayDiv.innerText = disOne + ' ' + op + ' ' + disTwo;

});