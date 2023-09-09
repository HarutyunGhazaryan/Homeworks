function binarySearch(sortedArray, num, index = 0) {
  if (index === sortedArray.length) {
    return -1;
  } else {
    if (sortedArray[index] === num) {
      return index;
    } else {
      return binarySearch(sortedArray, num, index + 1);
    }
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 10)); // Output: -1
