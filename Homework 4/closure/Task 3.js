function createCachingFunction() {
  let obj = {};
  return function cached(num) {
    if (num in obj) {
      return `${obj[num]} (cached)`;
    } else {
      obj[num] = num * 2;
      return `${num * 2} (calculated)`;
    }
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); // Output: 10 (calculated)
console.log(cachedCalculation(5)); // Output: 10 (cached)
