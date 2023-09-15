function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.eat = function (someFood) {
    if (this.stomach.length <= 10) {
      this.stomach.push(someFood);
    }
  };
  this.poop = function () {
    this.stomach.length = 0;
  };
  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}

const person = new Person("Mary", 50);
person.eat("food");
console.log(person.stomach);
person.poop();
console.log(person.stomach);
console.log(person.toString());
