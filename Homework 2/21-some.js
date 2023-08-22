function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

const some = mySome([1, 2, 3, 4, 5], (Element, index, array) => Element < 3);
console.log(some);
