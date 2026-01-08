const { Character } = require("./character");
const { Food } = require("./food");

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }
  // ... (keeping other methods same until takeSandwich)

  takeFood() {
    const food = this.currentRoom.items.find((item) => item instanceof Food);
    if (food) {
      this.items.push(food);
      this.currentRoom.items = this.currentRoom.items.filter(
        (item) => item !== food
      );
      this.cooldown += 3000;
      this.alert(`${this.name} took the ${food.name}`);
    }
  }

  // ...

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      if (
        this.attackTarget &&
        this.attackTarget.currentRoom === this.currentRoom
      ) {
        this.attack();
      } else {
        const food = this.currentRoom.items.find(
          (item) => item instanceof Food
        );
        if (food) {
          this.takeFood();
        } else {
          // 50/50 chance to move or scratch nose
          if (Math.random() > 0.5) {
            this.randomMove();
          } else {
            this.scratchNose();
          }
        }
      }
      this.rest();
    }
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    this.cooldown += 3000;
    const exits = this.currentRoom.getExits();
    const direction = exits[Math.floor(Math.random() * exits.length)];
    const nextRoom = this.currentRoom.getRoomInDirection(direction);
    this.currentRoom = nextRoom;
    this.alert(`${this.name} moved to the ${direction}`);

    if (
      this.attackTarget &&
      this.attackTarget.currentRoom === this.currentRoom
    ) {
      // Do nothing, wait for next turn
    }
  }

  takeFood() {
    const food = this.currentRoom.items.find((item) => item instanceof Food);
    if (food) {
      this.items.push(food);
      this.currentRoom.items = this.currentRoom.items.filter(
        (item) => item !== food
      );
      this.cooldown += 3000;
      this.alert(`${this.name} took the ${food.name}`);
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    clearTimeout(this.timeout);

    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    }.bind(this);
    this.timeout = setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.attackTarget.applyDamage(this.strength);
    this.alert(`${this.name} attacks!`);
    this.cooldown += 3000;
  }

  applyDamage(amount) {
    super.applyDamage(amount);

    if (this.cooldown > 0) {
      clearTimeout(this.timeout);
      this.cooldown = 0;
      this.attackTarget = this.player;
      // Using setImmediate or setTimeout(0) to act "immediately" but
      // allowing the current stack (like tests checking health) to finish first
      setTimeout(() => this.act(), 0);
    } else {
      this.attackTarget = this.player;
    }
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      if (
        this.attackTarget &&
        this.attackTarget.currentRoom === this.currentRoom
      ) {
        this.attack();
      } else {
        const food = this.currentRoom.items.find(
          (item) => item instanceof Food
        );
        if (food) {
          this.takeFood();
        } else {
          // 50/50 chance to move or scratch nose
          if (Math.random() > 0.5) {
            this.randomMove();
          } else {
            this.scratchNose();
          }
        }
      }
      this.rest();
    }
  }

  scratchNose() {
    this.cooldown += 3000;
    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy,
};
