const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const result = document.querySelector(".result");
const btns = document.querySelectorAll("button");
let total = 0;
let num = 0;
let num2 = 0;
let ope = "";
let displayValue="";

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

function populateData(e){
    displayValue += e.target.innerText;
    result.innerText = displayValue;
    
    if(["+", "-", "x", "/"].includes(ope)){
        num2 = Number(displayValue)
        if(ope === "+"){
            total = operate(add, num, num2);
        } else if(ope === "-"){
            total = operate(subtract, num, num2);
        } else if(ope === "x"){
            total = operate(multiply, num, num2);
        } else{
            total = operate(divide, num, num2);
        }
    } 
  
}
numbers.forEach(number => number.addEventListener("click", (e) => {
    populateData(e);
}))
operators.forEach(operator => operator.addEventListener("click", (e) => {
    num = Number(result.innerText);
    if(num !== 0 && num2 !== 0){
        num = total;
        result.innerText = total;
    }
    displayValue = "";
    ope = e.target.innerText;
    display.innerText = `${num} ${ope}`;
}))

equals.addEventListener("click", () =>{
    // new value after operator
    num2= Number(displayValue);
    if(ope === "+"){
        result.innerText = operate(add, num, num2);
    }else if(ope === "-"){
        result.innerText = operate(subtract, num, num2)
    }
    else if(ope === "x"){
        result.innerText = operate(multiply, num, num2)  
    }else{
        result.innerText = operate(divide, num, num2)
    }
    // it shows the calculation process if the user clicks equal
    display.innerText = `${num} ${ope} ${num2} =`;
    // num = result.innerText;
    // displayValue = "";
    
})

// btns.forEach(btn =>(){
    
// })
