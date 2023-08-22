function mySplice(array, start, del, ...add) {
  if (start < 0) {
    start = array.length + start;
  }
  if (del > array.length - start) {
    del = array.length - start;
  }

  const delElement = array.slice(start, start + del);

  for (let i = start; i < array.length; i++) {
    array[i] = array[i + del];
  }
  array.length -= del;

  const arrayNewLength = array.length + add.length;
  for (let i = arrayNewLength - 1; i >= start + add.length; i--) {
    array[i] = array[i - add.length];
  }

  for (let i = start, j = 0; j < add.length; i++, j++) {
    array[i] = add[j];
  }
  return delElement;
}

const num = mySplice([1, 2, 3, 4, 5, 6, 7, 8], -2, 2, 10, 11);
console.log(num);
