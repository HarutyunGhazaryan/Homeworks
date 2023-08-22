function myUnshift(array, ...elements) {
  for (let i = elements.length - 1; i >= 0; i--) {
    array.splice(0, 0, elements[i]);
  }
  return array.length;
}

const array = [2, 3, 4, 5];
const length = myUnshift(array, 0, 1);
console.log(length);
console.log(array);
