function curry(add) {
  return function curried(...arg1) {
    if (add.length === arg1.length) {
      return add(...arg1);
    } else {
      return function (...arg2) {
        return curried(...arg1, ...arg2);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
