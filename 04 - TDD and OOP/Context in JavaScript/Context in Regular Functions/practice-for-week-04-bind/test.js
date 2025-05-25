const { Employee } = require('./employee');

// Your code here
const jhonWick= new Employee("Jhon Wick", "Dog Lover")

setTimeout(jhonWick.sayName.bind(jhonWick), 2000);

setTimeout(jhonWick.sayOccupation.bind(jhonWick),3000)