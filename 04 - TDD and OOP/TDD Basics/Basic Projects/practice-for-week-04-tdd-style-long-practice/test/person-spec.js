// Your code here
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
const Person = require('../problems/person.js');
chai.use(spies);

describe('Person Class', () => {
  let person;
  beforeEach(() => {
    person = new Person('Edson', 37);
  });

  describe('constructor', () => {
    it('should create a new instance receiving a name and age and set them as properties on the instance', () => {
      expect(person).to.be.an.instanceOf(Person);
      expect(person).to.have.property('name');
      expect(person).to.have.property('age');
      expect(person.name).to.equal('Edson');
      expect(person.age).to.equal(37);
    });
  });

  describe('Instance methods', () => {
    it('should have a sayHello() method', () => {
      expect(person.sayHello).to.be.a('function');
    });
    it('should have a visit(otherPerson) method', () => {
      expect(person.visit).to.be.a('function');
    });
    it('should have a switchVisit(otherPerson) method', () => {
      expect(person.switchVisit).to.be.a('function');
    });
    it('should have an update(obj) method', () => {
      expect(person.update).to.be.a('function');
    });
    it('should have a tryUpdate(obj) method', () => {
      expect(person.tryUpdate).to.be.a('function');
    });
    it('should have a greetAll(obj) method', () => {
      expect(Person.greetAll).to.be.a('function');
    });
  });

  describe('sayHello()', () => {
    it("should return a string of the Person's instance name and a greeting message", () => {
      const greeting = person.sayHello();
      expect(greeting).to.be.a('string');
      expect(greeting).to.equal('Hello, my name is Edson');
    });
  });

  describe('visit(oherPerson)', () => {
    it('should return a string stating that this instance visited the passed-in person instance', () => {
      const otherPerson = new Person('Alice', 30);
      const visitMessage = person.visit(otherPerson);
      expect(visitMessage).to.be.a('string');
      expect(visitMessage).to.equal('Edson visited Alice');
    });
  });

  describe('switchVisit(otherPerson)', () => {
    it('should invoke the visit method on the passed-in person instance with this instance as the argument', () => {
      const otherPerson = new Person('Alice', 30);
      const visitMessage = person.switchVisit(otherPerson);
      expect(visitMessage).to.be.a('string');
      expect(visitMessage).to.equal('Alice visited Edson');
    });
  });

  describe('update(obj)', () => {
    it('should thow a TypeError if the argument is not an object', () => {
      const obj = 'This is a string';

      expect(() => person.update(obj)).to.throw(
        TypeError,
        'Argument must be an object'
      );
    });
    it("should update the instance's properties to match the passe-in object values if the incoming argument is an object", () => {
      const updateObj = { name: 'Bob', age: 40 };
      expect(updateObj).to.be.an('object');
      expect(updateObj).to.have.all.keys('name', 'age');

      person.update(updateObj);
      expect(person.name).to.equal('Bob');
      expect(person.age).to.equal(40);
    });

    it('should throw a TypeError  with an appropriate message if the incoming object does not have a name and an age property', () => {
      const updateObj = { name: 'Bob' }; // Missing age property
      expect(updateObj).to.be.an('object');
      expect(updateObj).to.have.property('name');
      expect(updateObj).to.not.have.property('age');
      expect(() => person.update(updateObj)).to.throw(
        TypeError,
        'Object must have name and age properties'
      );
    });
  });

  describe('tryUpdate(obj)', () => {
    it('should call the update method with the passed-in object', () => {
      const updateObj = { name: 'Charlie', age: 25 };
      const updateSpy = chai.spy.on(person, 'update');
      person.tryUpdate(updateObj);
      expect(updateSpy).to.have.been.called.with(updateObj);
    });

    it('should return true if the update was successful', () => {
      const updateObj = { name: 'Charlie', age: 25 };
      const result = person.tryUpdate(updateObj);
      expect(result).to.be.true;
    });
    it('should return false if update is not successfully invoked', () => {
      const updateObj = { name: 'Charlie' }; // Missing age property
      const result = person.tryUpdate(updateObj);
      expect(result).to.be.false;
    });
  });

  describe('greetAll(obj)', () => {
    it('should return an array of greeting messages for each person in the passed-in array', () => {
      const person1 = new Person('Alice', 30);
      const person2 = new Person('Bob', 25);
      const people = [person, person1, person2];
      const greetings = Person.greetAll(people);

      expect(greetings).to.be.an('array');
      expect(greetings).to.have.lengthOf(3);
      expect(greetings[0]).to.equal('Hello, my name is Edson');
      expect(greetings[1]).to.equal('Hello, my name is Alice');
      expect(greetings[2]).to.equal('Hello, my name is Bob');
    });
  });
});
