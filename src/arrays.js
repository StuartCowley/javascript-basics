const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return (array[index - array.length]);
  } else {
  return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1); 
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(name => name.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(name => name.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(item => item % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiouAEIOU]/i.test(string));
};

const removeSpaces = string => {
  string = string.replace(/\s+/g, '');
  return string;
};

const sumNumbers = numbers => {
  let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];}
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};