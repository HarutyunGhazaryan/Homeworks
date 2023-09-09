const result = [];

function generateCombinations(inputArray, n, newArr = []) {
  if (n === 0) {
    result.push([...newArr]);
    return;
  }

  for (let i = 0; i < inputArray.length; i++) {
    newArr.push(inputArray[i]);
    generateCombinations(inputArray.slice(i + 1), n - 1, newArr);
    newArr.pop();
  }
}

const inputArray = [1, 2, 3, 4];
generateCombinations(inputArray, 2);
console.log(result);
