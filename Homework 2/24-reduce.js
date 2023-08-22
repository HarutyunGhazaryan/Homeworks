function myReduce(array, callback, inVal) {
  let acc = inVal === undefined ? array[0] : inVal;

  for (let i = inVal === undefined ? 1 : 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

const sum = myReduce([1, 2, 3], (acc, cur) => acc + cur, 0);
console.log(sum);
