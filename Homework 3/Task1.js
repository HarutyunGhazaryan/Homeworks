const matrix = [
  [1, 8, 3],
  [6, 7, 8],
  [12, 25, 0],
  [58, 12, 12, 8],
];

function largestArrayIndex(matrix) {
  let maxSum = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < matrix.length; i++) {
    const sumArray = matrix[i].reduce((acc, cur) => acc + cur, 0);
    if (sumArray > maxSum) {
      maxSum = sumArray;
      maxIndex = i;
    } else {
      maxIndex = i;
    }
  }
  return maxIndex;
}
const index = largestArrayIndex(matrix);
console.log(index);
