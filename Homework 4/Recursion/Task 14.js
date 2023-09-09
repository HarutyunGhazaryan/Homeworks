function subsetSum(inputArray, n, num1 = 0, num2 = num1 + 1) {
  if (inputArray[num1] + inputArray[num2] === n) {
    return true;
  } else if (num2 < inputArray.length - 1) {
    return subsetSum(inputArray, n, num1, num2 + 1);
  } else if (num1 < inputArray.length - 2) {
    return subsetSum(inputArray, n, num1 + 1, num2);
  }
  return false;
}

const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10)); // Output: true
