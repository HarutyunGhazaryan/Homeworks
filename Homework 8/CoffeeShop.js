class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
    this.amount = 0;
    this.cheapestPrice = Infinity;
    this.cheapest = "";
    this.drinks = [];
    this.foods = [];
  }
  addOrder(foodOrDrink) {
    for (const element of menu) {
      if (element.item === foodOrDrink) {
        this.orders.push(foodOrDrink);
        this.amount += element.price;
        return "Order added!";
      } else if (element.item === menu[menu.length - 1].item) {
        return "This item is currently unavailable!";
      }
      if (element.price < this.cheapestPrice) {
        this.cheapestPrice = element.price;
        this.cheapest = element.item;
      }
    }
  }
  fulfillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    } else {
      let firstElement = this.orders.shift();
      for (const element of menu) {
        if (firstElement === element.item) {
          this.amount - element.price;
        }
      }
      return `The ${firstElement} is ready!`;
    }
  }
  listOrders() {
    return this.orders;
  }
  dueAmount() {
    if (this.orders.length === 0) {
      this.amount = 0;
    }
    return this.amount;
  }
  cheapestItem() {
    return this.cheapest;
  }
  drinksOnly() {
    for (const element of menu) {
      if (element.type === "drink") {
        this.drinks.push(element.item);
      }
    }
    return this.drinks;
  }
  foodOnly() {
    for (const element of menu) {
      if (element.type === "food") {
        this.foods.push(element.item);
      }
    }
    return this.foods;
  }
}

const menu = [
  { item: "orange juice", type: "drink", price: 1.4 },
  { item: "lemonade", type: "drink", price: 0.4 },
  { item: "cranberry juice", type: "drink", price: 0.6 },
  { item: "pineapple juice", type: "drink", price: 1.2 },
  { item: "lemon iced tea", type: "drink", price: 1 },
  { item: "vanilla chai latte", type: "drink", price: 0.8 },
  { item: "hot chocolate", type: "drink", price: 1.3 },
  { item: "iced coffee", type: "drink", price: 1.4 },

  { item: "tuna sandwich", type: "food", price: 1.4 },
  { item: "ham and cheese sandwich", type: "food", price: 1.4 },
  { item: "bacon and egg", type: "food", price: 1.4 },
  { item: "steak", type: "food", price: 1.4 },
  { item: "hamburger", type: "food", price: 1.4 },
  { item: "cinnamon roll", type: "food", price: 1.4 },
];

const tcs = new CoffeeShop("shop");

console.log(tcs.addOrder("hot cocoa"));
console.log(tcs.addOrder("iced tea"));

console.log(tcs.addOrder("cinnamon roll"));
console.log(tcs.addOrder("iced coffee"));
console.log(tcs.listOrders());

console.log(tcs.dueAmount());

console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());

console.log(tcs.listOrders());

console.log(tcs.dueAmount());

console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());
