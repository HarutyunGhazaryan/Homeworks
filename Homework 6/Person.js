function Person(name, age) {
  this.name = name;
  this.age = age;

  this.compareAge = function (person2) {
    if (this.age < person2.age) {
      console.log("Joel is older than me.");
    } else if (this.age > person2.age) {
      console.log("Samuel is younger than me.");
    } else {
      console.log("Samuel is younger than me.");
    }
  };
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);
