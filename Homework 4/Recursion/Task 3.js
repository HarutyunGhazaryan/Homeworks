function power(n1, n2) {
  if (n2 === 1) {
    return n1;
  } else {
    return n1 * power(n1, n2 - 1);
  }
}

console.log(power(2, 3)); // Output: 8
