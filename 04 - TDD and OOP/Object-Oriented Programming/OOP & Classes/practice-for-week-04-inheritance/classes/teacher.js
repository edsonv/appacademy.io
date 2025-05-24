const Person = require('./person');

// Your code here
class Teacher extends Person {
  static combinedYearsOfExperience(teachers) {
    return teachers.reduce(
      (yearsOfExperience, teacher) =>
        yearsOfExperience + teacher.yearsOfExperience,
      0
    );
  }

  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
