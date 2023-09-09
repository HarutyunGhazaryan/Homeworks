function sumOfDigits(num, sum = 0) {
  if (num === 0) {
    return sum;
  } else {
    sum += num % 10;
    return sumOfDigits(Math.floor(num / 10), sum);
  }
}

console.log(sumOfDigits(12345)); // Output: 15
