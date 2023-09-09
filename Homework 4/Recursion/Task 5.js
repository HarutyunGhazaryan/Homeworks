function isPalindrome(str, index1 = 0, index2 = str.length - 1) {
  if (str[index1] !== str[index2]) {
    return false;
  } else {
    if (
      index1 === index2 ||
      (str[index1] === str[index2] && index2 - index1 === 1)
    ) {
      return true;
    } else {
      return isPalindrome(str, index1 + 1, index2 - 1);
    }
  }
}

console.log(isPalindrome("noon")); // Output: true
console.log(isPalindrome("hello")); // Output: false
