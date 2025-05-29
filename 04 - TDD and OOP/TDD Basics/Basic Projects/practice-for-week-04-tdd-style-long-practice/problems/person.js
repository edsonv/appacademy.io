class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj))
      throw new TypeError('Argument must be an object');

    const { name, age } = obj;

    if (!name || !age)
      throw new TypeError('Object must have name and age properties');

    this.name = name;
    this.age = age;
    return this;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    let messages = [];
    for (let person of obj) {
      messages.push(person.sayHello());
    }

    return messages;
  }
}

module.exports = Person;
