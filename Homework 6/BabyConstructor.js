function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;

  this.play = function () {
    return `Playing with ${favoriteToy}.`;
  };
}

Baby.prototype.information = function () {
  return `My name is ${this.name} and I am ${this.age} years old`;
};

const baby = new Baby("Mary", 4, "doll");

console.log(baby.play());
console.log(baby.information());
