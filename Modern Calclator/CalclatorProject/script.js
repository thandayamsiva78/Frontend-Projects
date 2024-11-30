window.onload = function(){
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const zero = document.getElementById("zero");
    const Ac = document.getElementById("Ac");
    const remove = document.getElementById("remove");
    const point = document.getElementById("point");
    const addition = document.getElementById("addition");
    const subtract = document.getElementById("subtract");
    const multiply = document.getElementById("multiply");
    const division = document.getElementById("division");
    const equals = document.getElementById("equals");

    let display = document.querySelector(".calculator-bar");
    let currentInput = "";
    let operator = null;
    let previousInput = "";

    function updateDisplay(value) {
        display.innerText = value;
    }

    function handleNumber(num) {
        currentInput += num;
        updateDisplay(currentInput);
    }

    function handleOperator(op) {
        if (currentInput === "") return;
        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentInput = result;
        operator = null;
        updateDisplay(result);
    }

    function clearCalculator() {
        currentInput = "";
        previousInput = "";
        operator = null;
        updateDisplay("");
    }

    one.onclick = () => handleNumber("1");
    two.onclick = () => handleNumber("2");
    three.onclick = () => handleNumber("3");
    four.onclick = () => handleNumber("4");
    five.onclick = () => handleNumber("5");
    six.onclick = () => handleNumber("6");
    seven.onclick = () => handleNumber("7");
    eight.onclick = () => handleNumber("8");
    nine.onclick = () => handleNumber("9");
    zero.onclick = () => handleNumber("0");
    point.onclick = () => handleNumber(".");
    
    addition.onclick = () => handleOperator("+");
    subtract.onclick = () => handleOperator("-");
    multiply.onclick = () => handleOperator("*");
    division.onclick = () => handleOperator("/");
    equals.onclick = () => calculate();

    Ac.onclick = () => clearCalculator();
    remove.onclick = () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    };
};


 