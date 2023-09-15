function Calculator() {
  this.add = function (a, b) {
    console.log(a + b);
  };
  this.subtract = function (a, b) {
    console.log(a - b);
  };
  this.multiply = function (a, b) {
    console.log(a * b);
  };
  this.divide = function (a, b) {
    console.log(a / b);
  };
}

const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
