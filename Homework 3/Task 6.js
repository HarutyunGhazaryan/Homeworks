const matrix = [
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1],
];

function maximalSquare(matrix) {
  let copy = [...matrix];
  let result = 0;

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy[i].length; j++) {
      if (i == 0 || j == 0) {
        copy[i][j] = matrix[i][j];
      } else if (matrix[i][j] > 0) {
        copy[i][j] =
          1 + Math.min(copy[i][j - 1], copy[i - 1][j], copy[i - 1][j - 1]);
      }
      if (copy[i][j] > result) {
        result = copy[i][j];
      }
    }
  }
  return result;
}

const maximalSquareLength = maximalSquare(matrix);
console.log(maximalSquareLength);
