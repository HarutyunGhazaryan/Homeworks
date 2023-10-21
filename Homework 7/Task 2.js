function isPositive(a) {
  try {
    if (a > 0) {
      return "Yes";
    } else if (a === 0) {
      throw new Error("Zero Error");
    } else {
      throw new Error("Negative Error");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(isPositive(12));
console.log(isPositive(0));
console.log(isPositive(-9));
