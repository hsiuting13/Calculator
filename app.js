const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const result = document.querySelector(".result");
const deleNum = document.querySelector(".delete");
const clear = document.querySelector(".clear");

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
    return Math.round(op(num, num2)*1000)/1000;
}

function populateData(e){
    displayValue += e.target.innerText;
    displayValue = parseFloat(displayValue);
    result.innerText = displayValue;
    if(["+", "-", "x", "/"].includes(ope)){
        num2 = parseFloat(displayValue)
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
deleNum.addEventListener("click", () =>{
    if(total !== 0 && num !== 0 && num2 !== 0){
        return
    }
    else if(result.innerText.length > 0){
        result.innerText = result.innerText.substring(0, result.innerText.length - 1)
        displayValue = result.innerText;
        if(result.innerText === ""){
            result.innerText = "0";
            displayValue = "";
        }
    } 
})
clear.addEventListener("click",() =>{
    display.innerText = "";
    result.innerText = "0"
    displayValue = "";
    num = 0;
    num2 = 0;
    total = 0;
})
dot.addEventListener("click", ()=>{
    if(result.innerText.includes(".")){
        return;
    } else if(result.innerText ==="0"){
        displayValue += "0."
    }
    else{
        displayValue += "."
    }
    result.innerText = displayValue;
})
numbers.forEach(number => number.addEventListener("click", (e) => {
    populateData(e);
}))
operators.forEach(operator => operator.addEventListener("click", (e) => {
    num = parseFloat(result.innerText);
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
    if(displayValue === ""){
        alert("plz, provide a value")
        return;
    }else{
        num2= parseFloat(displayValue);
    }
   
    if(ope === "+"){
        total = operate(add, num, num2);
    }else if(ope === "-"){
        total = operate(subtract, num, num2);
    }
    else if(ope === "x"){
        total = operate(multiply, num, num2);
    }else{
        total = operate(divide, num, num2);
    }

    // it shows the calculation process if the user clicks equal
    display.innerText = `${num} ${ope} ${num2} =`;
    result.innerText = total;
    num = 0;
    num2 = 0;

})
