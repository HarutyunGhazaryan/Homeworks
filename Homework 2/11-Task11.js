const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function averageAge(users) {
  let sum = 0;
  users.forEach((element) => {
    sum += element.age;
  });
  return sum / users.length;
}
const age = averageAge(users);
console.log(age);
