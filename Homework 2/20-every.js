function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

const every = myEvery([1, 2, 3, 4, 5], (Element, index, array) => Element < 3);
console.log(every);
