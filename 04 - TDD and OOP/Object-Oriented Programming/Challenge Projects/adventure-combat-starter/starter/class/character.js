
class Character {
  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom =  currentRoom;
    this.items = []
    this.health = 100
    this.strength=10
  }

  applyDamage(amount) {
    // Fill this in
    if(this.health-amount <=0){
      this.die()
      this.health -=amount
    }else {
      this.health -=amount
    }
    
  }

  die() {
    // Fill this in
    this.currentRoom.items = [...this.currentRoom.items, ...this.items]
    this.items = []
    this.currentRoom = null
  }
}

module.exports = {
  Character,
};
