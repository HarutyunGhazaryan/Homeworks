function privateVariable(number) {
  return {
    get: function () {
      return number;
    },
    set: function (num1) {
      number = num1;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get());
secretValue.set(100);
console.log(secretValue.get());
