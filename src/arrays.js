const getNthElement = (index, array) => {
index %= array.length;
return array[index];
};

const arrayToCSVString = array => {
return array.join();
};

const csvStringToArray = string => {
  return string.split (',');
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
 return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
const array2 = [...array];
array2.splice(index, 1);
return array2;
};

const elementsStartingWithAVowel = strings => {
regex = /^[aeiou]/gi
return strings.filter(string => string.match(regex));
};

const removeSpaces = string => {
return string.split(' ').join('');
};

const sumNumbers = numbers => {
return numbers.reduce((sum, num) => sum + num, 0);
};

const sortByLastLetter = strings => {
return strings.sort ((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));
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
