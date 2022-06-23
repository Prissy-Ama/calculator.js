// read numbers in the program

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

// select an operator
const operator = prompt("Select an operator (+, -, *, /)");
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Wrong input! Refresh the page and provide data again.");
} else {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  }
  alert(num1 + operator + num2 + "=" + result);
}
