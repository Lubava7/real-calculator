const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

// display.innerText = '1235'
let displayText = "";

const OPERATORS = ["%", "+", "X", "÷", "-"];

let currentOperator = null;

const handleButtonClick = (symbol) => {
  if (symbol === "CE") {
    display.innerText = "";
    return;
  }
  if (symbol === "=") {
  }

  if (symbol === "+/-") {
    if (display.innerText[0] === "-") {
      display.innerText = display.innerText.slice(1);
    } else {
      display.innerText = "-" + display.innerText;
    }
    return;
  }
  if (OPERATORS.includes(symbol)) {
    currentOperator = symbol;

    return;
  }

  display.innerText = display.innerText + symbol;
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    handleButtonClick(button.innerText);
  });
});
