const createPerson = (name, age) => {
  // your code here
  const person = new Object();
  person.name = name, 
  person.age = age;
  
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  // your code here
  return people.map(persons => persons.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name,
    age,
    introduce(nameTo) {
      return `Hi ${nameTo}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
