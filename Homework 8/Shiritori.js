class Shiritory {
  words = [];
  gameOver = false;

  play(word) {
    if (this.gameOver === true) {
      return "Please call the restart method to play again.";
    } else if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    } else if (
      this.words[this.words.length - 1].at(-1) === word[0] &&
      !this.words.includes(word)
    ) {
      this.words.push(word);
      return this.words;
    } else {
      this.gameOver = true;
      return "Game Over";
    }
  }
  restart() {
    this.gameOver = false;
    this.words.length = 0;
    return "game restarted";
  }
}

myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"
console.log(myShiritori.play("apple")); // "Please call the restart method to play again."
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"
