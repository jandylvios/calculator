

const clearBtn = document.getElementById("calc-clear");
const deleteBtn = document.getElementById("calc-delete");
const moduloBtn = document.getElementById("calc-modulo");
const divideBtn = document.getElementById("calc-divide");
const multiplyBtn = document.getElementById("calc-multiply");
const subtractBtn = document.getElementById("calc-subtract");
const addBtn = document.getElementById("calc-add");
const signBtn = document.getElementById("calc-plus-minus");
const dotBtn = document.getElementById("calc-dot");
const equalsBtn = document.getElementById("calc-equals");
const calcBtn = document.querySelectorAll('.calc-btn');
const calcResult = document.getElementById("calc-output");
let input = "";
let firstNum = "";
let secondNum;
let operation;


    document.querySelectorAll('.calc-btn') //input numbers
    .forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.innerHTML;

            if(Number(input) === 0){
                if(value === "0"){
                    calcResult.textContent = 0;
                }
                else{
                    input += value;
                    calcResult.textContent = input;
                } 
            }
            else if(value === "."){
                if(input.includes(".")){
                    calcResult.textContent = input;
                }else{
                    input += value;
                    calcResult.textContent = input;
                }
            }
            else{
                input += value;
                calcResult.textContent = input;
            }            
        });
    });

    document.querySelectorAll('.optr-btn') //operators
    .forEach((button) => {
        button.addEventListener('click', () => {
            operation = button.innerHTML;       
            firstNum = Number(input);
            input = "";
            calcResult.textContent = operation;
        });
    });

    signBtn.onclick = function(){ //result
        if(Number(input) != 0){
            input = Number(input) * -1;
        input = String(input);
        calcResult.textContent = input;
        }  
    }
    clearBtn.onclick = function(){ 
        input = "";
        firstNum = 0;
        secondNum = 0;
        calcResult.textContent = 0;
    }
    equalsBtn.onclick = function(){
        secondNum = Number(input);
        if(firstNum === ""){
            input = "";
            firstNum = 0;
            secondNum = 0;         
            calcResult.textContent = 0;          
        }else{           
            input = "";
            let result;
            switch(operation){
                case    "+"     :   result = firstNum + secondNum;
                                    break;
                case    "-"     :   result = firstNum - secondNum;
                                    break;
                case    "×"     :   result = firstNum * secondNum;
                                    break;
                case    "÷"     :   result = firstNum / secondNum;
                                    result = Math.round(result * 100) / 100;
                                    break;
                default         :   break;
            }
            input = "";
            firstNum = 0;
            secondNum = 0;      
            calcResult.textContent = result;
        }
        
    }
    deleteBtn.onclick = function(){
        input = input.slice(0, -1);
        calcResult.textContent = input;
        if(input === "")
            calcResult.textContent = 0;
    }
    








/*

const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
};
decBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
};
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
};

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}


const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let day = 4;
day--;


console.log(`It is ${weekDays[day]}`);
*/
