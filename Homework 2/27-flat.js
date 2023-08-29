function myFlat(array, dept = 1) {
  if (dept < 1 || !Array.isArray(array)) {
    return array;
  }

  return array.reduce((acc, cur) => {
    return acc.concat(myFlat(cur, dept - 1));
  }, []);
}

const arr = myFlat([1, [2, [3, [4]]], 7], 5);
console.log(arr);
