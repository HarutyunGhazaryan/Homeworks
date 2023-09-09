function createPerson(name, age) {
  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    setName: function (name1) {
      name = name1;
    },
    setAge: function (age1) {
      age = age1;
    },
  };
}

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25
