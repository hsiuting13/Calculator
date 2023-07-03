const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result");

let num;
let num2;
let ope;

function add(num, num2){
    return num + num2;
}

function subtract(num, num2){
    return num - num2;
}

function multiply(num, num2){
    return num*num2;
}

function divide(num, num2){
    return num/num2;
}

function operate(op, num, num2){
    return op(num, num2);
}




