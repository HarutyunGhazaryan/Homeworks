function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = Array(rows);
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j] = matrix[j][i];
    }
  }
  return grid;
}

function wordInMatrix(matrix, word) {
  const wordReverse = word.split("").reverse().join("");

  for (let i = 0; i < matrix.length; i++) {
    let str = "";
    for (let j = 0; j < matrix[i].length; j++) {
      str += matrix[i][j];
    }
    if (str.includes(word) || str.includes(wordReverse)) {
      return true;
    }
  }
  return false;
}

const matrix = [
  ["a", "b", "f"],
  ["f", "r", "a"],
  ["f", "a", "g"],
  ["g", "c", "e"],
];

const word = "car";

const transposeMatrix = transpose(matrix);

const wordIsInMatrixRows = wordInMatrix(matrix, word);
const wordIsInMatrixColumns = wordInMatrix(transposeMatrix, word);

const result =
  wordIsInMatrixRows || wordIsInMatrixColumns
    ? `The "${word}" is in the matrix`
    : `The ${word} is not in the matrix`;

console.log(result);
