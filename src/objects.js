const createPerson = (name, age) => {
  return {name, age}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object[property]? true: false;
};

const isOver65 = person => {
  return person.age>65? true:false;
};

const getAges = people => {
  const array=[]
  for (let i=0; i<people.length;i++){
    array.push(people[i].age)
  }
  return array
};

const findByName = (name, people) => {
for (let i=0;i<people.length;i++){
  if (people[i].name === name){
    return people[i]
  }
}
};

const findHondas = cars => {
  const array = []
  for (let i=0;i<cars.length;i++){
     if (cars[i].manufacturer==="Honda"){
      array.push(cars[i])
     }
  }
  return array
};

const averageAge = people => {
  const array=[]
  for (let i=0;i<people.length;i++){
    array.push(people[i].age)
  }
  return array.reduce((a,b)=>a+b, 0)/array.length
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
    }
  }
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
