class Jungle {
  tigers = new Tiger();
  monkeys = new Monkey();
  snakes = new Snake();
  fish = new Fish();
  grain = new Grain();
  meat = new Meat();

  constructor(soundOff = false) {
    if (soundOff) {
      this.tigers.soundOff = true;
      this.monkeys.soundOff = true;
      this.snakes.soundOff = true;
    }
  }
}

class Animal {
  energy = 15;
  soundOff = false;
  grain = true;

  sound(energyChange = -3) {
    if (!this.soundOff) {
      this.energy += energyChange;
    }
  }
  eatFood(energyChange = 5) {
    this.energy += energyChange;
    if (!this.grain) {
      console.log("I can not eat that");
    }
  }
  sleep(energyChange = 10) {
    this.energy += energyChange;
  }
}
class Tiger extends Animal {
  constructor(grain) {
    super(grain);
    grain = false;
  }
}
class Monkey extends Animal {
  play() {
    if (this.energy >= 8) {
      console.log("Oooo Oooo");
      this.energy -= 8;
    } else {
      console.log("I am too tired");
    }
  }
}
class Snake extends Animal {}

class Food {}
class Fish extends Food {}
class Grain extends Food {}
class Meat extends Food {}

const jungle = new Jungle();

jungle.monkeys.sleep(5);
jungle.monkeys.eatFood(2);
jungle.monkeys.sound(-4);
jungle.monkeys.play();
jungle.tigers.grain = false;
jungle.tigers.eatFood();

console.log(jungle);
