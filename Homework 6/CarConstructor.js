function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  this.fill = function (gallons) {
    this.tank += gallons;
  };
  this.drive = function (distance) {
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance <= maxDistance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
      return distance;
    } else {
      this.odometer += this.tank * this.milesPerGallon;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  };
}

const car = new Car("mercedes", 5);

car.fill(8);

console.log(car.drive(50));
console.log(car.odometer);
console.log(car.tank);
