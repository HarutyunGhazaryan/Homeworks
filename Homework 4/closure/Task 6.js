function memoize(fib) {
  let obj = {};

  return function memoize(n) {
    if (n in obj) {
      return `${obj[n]} (cached)`;
    } else {
      obj[n] = fibonacci(n);
      return `${fibonacci(n)} (calculated)`;
    }
  };
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
