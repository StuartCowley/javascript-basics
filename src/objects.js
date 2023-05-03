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
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
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
