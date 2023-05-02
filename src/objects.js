const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

const createPerson = (name, age) => {
  // your code here
  return new Person(name, age);
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
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  return people.map(x => x.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(x => x.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(x => x.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  return (
    getAges(people).reduce((partialSum, x) => x + partialSum) / people.length
  );
};

const createTalkingPerson = (name, age) => {
  // your code here
  const object = {
    name,
    age
  };
  object.introduce = otherName => {
    return `Hi ${otherName}, my name is ${name} and I am ${age}!`;
  };
  return object;
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
