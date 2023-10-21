function reverseString(s) {
  try {
    if (typeof s === "string") {
      return s.split("").reverse().join("");
    } else {
      throw new Error("s.split is not a function");
    }
  } catch (error) {
    console.log(error.message);
    return s;
  }
}

console.log(reverseString(1234));
console.log(reverseString("abcd"));
