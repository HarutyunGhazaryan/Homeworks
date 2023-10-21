function reverseString(s) {
  try {
    if (typeof s === "string") {
      console.log(s.split("").reverse().join(""));
    } else {
      throw new Error("s.split is not a function");
    }
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString(123);
reverseString("123");
