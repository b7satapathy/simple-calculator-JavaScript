const history = document.getElementById("history-value");
const output = document.getElementById("output-value");
const clearBtn = document.getElementById("clear");
const numberBtns = document.getElementsByClassName("number");
const operatorBtns = document.getElementsByClassName("operator");

let getHistory = function () {
  return history.innerText;
};

let printHistory = function (num) {
  history.innerText = num;
};

let getOutput = function () {
  return output.innerText;
};

let printOutput = function (num) {
  output.innerText = num;
};

// const getFormattedNumber = function (num) {
//   let n = Number(num);
//   let value = n.toLocaleString("en");
//   return value;
// };

// const removeFormattedNumber = function (num) {
//   return num.replaceAll(",", "");
// };

for (i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", function () {
    let userInput = getOutput();
    userInput = userInput + this.id;
    printOutput(userInput);
  });
}

for (i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      let userInput = getOutput();
      if (userInput) {
        userInput = userInput.slice(0, -1);
        printOutput(userInput);
      }
    } else {
      let userInput = getOutput();
      let history = getHistory();
      if (userInput != "") {
        history = history + userInput;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
