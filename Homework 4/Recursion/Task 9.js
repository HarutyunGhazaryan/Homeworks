function countOccurrences(numbers, num, index = 0, count = 0) {
  if (index === numbers.length) {
    return count;
  } else if (numbers[index] === num) {
    return countOccurrences(numbers, num, index + 1, count + 1);
  } else {
    return countOccurrences(numbers, num, index + 1, count);
  }
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2)); // Output: 4
