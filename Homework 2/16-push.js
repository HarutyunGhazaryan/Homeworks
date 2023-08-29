function myPush(array, ...elements) {
  array.splice(array.length, 0, ...elements);
  return array.length;
}

const array = [1, 2, 3, 4, 5];
const length = myPush(array, 6, 7);
console.log(length);
console.log(array);
