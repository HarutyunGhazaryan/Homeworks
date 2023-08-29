function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
  return undefined;
}

const array = [1, 2, 3, 4, 5];
const arr = [];
myForEach(array, (Element, index, array) => {
  arr.push(Element / 2);
});

console.log(arr);
