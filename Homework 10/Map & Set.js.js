class Users {
  constructor(data) {
    this.map = new Map();
    for (let user of data) {
      this.map.set(user.id, user);
    }
  }

  addUsers(users) {
    for (let user of users) {
      this.map.set(user.id, user);
    }
  }
  getUserById(id) {
    return this.map.get(id);
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);
console.log(mappedUser.getUserById(1)); // { id: 1, name: "Alice", email: "alice@example.com" };
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
console.log(mappedUser.getUserById(3)); // { id: 3, name: "Ann", email: "ann@example.com" }

//-------------------------------------------------------------------------------------------------------

function removeDuplicates(array) {
  return [new Set(array)];
}

console.log(removeDuplicates([1, 2, 5, 10, 2, 45, 1, 1, 1]));

//-------------------------------------------------------------------------------------------------------

function factorial(n) {
  const map = new Map();
  if (n === 1) {
    return 1;
  }
  if (map.has(n)) {
    return map.has(n);
  }

  const factorialN = n * factorial(n - 1);

  map.set(n, factorialN);
  return factorialN;
}

console.log(factorial(5));
