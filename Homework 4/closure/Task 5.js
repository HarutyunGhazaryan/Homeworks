function partial(add, ...args1) {
  return function (...args2) {
    return add(...args1, ...args2);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 5);
console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)
