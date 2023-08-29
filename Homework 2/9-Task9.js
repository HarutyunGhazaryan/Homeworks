const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filteredUsers(array, str) {
  return array.filter((Element) => Element[str] === true);
}

const filteredUs = filteredUsers(users, "isAstronaut");
console.log(filteredUs);
