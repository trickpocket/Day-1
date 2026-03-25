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
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b == 0 ? "Error: Division by Zero" : a / b;
    default:
      return "Error";
  }
}
