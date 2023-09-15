function plane(name) {
  const airplane = {
    name: name,
    isFlying: "",
    takeOff: function () {
      this.isFlying = true;
    },
    land: function () {
      this.isFlying = false;
    },
  };
  return airplane;
}
const plane1 = plane("airplane");
plane1.takeOff();
console.log(plane1.isFlying);
plane1.land();
console.log(plane1.isFlying);
