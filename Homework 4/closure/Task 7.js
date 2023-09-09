function createCalculator(operation) {
  if (operation === "add") {
    return function add(num1, num2) {
      return num1 + num2;
    };
  } else if (operation === "multiply") {
    return function multiply(num1, num2) {
      return num1 * num2;
    };
  }
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8
