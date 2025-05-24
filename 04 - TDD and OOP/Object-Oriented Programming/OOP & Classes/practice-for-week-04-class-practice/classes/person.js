// Your code here
class Person {
  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw Error('introducePeople only takes an array as an argument.');
    }

    people.forEach((person) => {
      if (!(person instanceof Person)) {
        throw Error('All items in array must be Person class instances.');
      }
    });

    people.forEach((person) => {
      person.introduce();
    });
  }

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
