function checkNum(num) {
  console.log("Debug:", num);
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkNum(4));
console.log(checkNum(5));

function checkOrder(num) {
  console.log("Debug:", num);
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkOrder(10));

function checkLarger(a, b) {
  return Math.max(a, b);
}

console.log(`${checkLarger(10, 9)} is larger`);

function calculate(a, b, operator) {
  console.log(`Inputs: ${a}, ${b}, ${operator}`);
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Error: Invalid number input";
  }

  if (operator === "/" && b === 0) {
    return "Error: Cannot divide by zero";
  }

  let result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  } else {
    return "Error: Invalid operator";
  }
  if (result !== undefined) {
    console.log("Result:", result);
  }
  return result;
}

calculate(5, 3, "+");
calculate("5", 3, "+");
calculate("hello", 5, "+");
calculate(10, 0, "/");
calculate(10, 2, "/");

/* OR
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

if (!operations[operator]) {
  return "Invalid operator";
}

let result = operations[operator](a, b);

*/
