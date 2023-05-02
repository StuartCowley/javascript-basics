const getNthElement = (index, array) => {
  // your code here
  const newIndex = index % array.length;
  return array[newIndex];
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(x => String(x));
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(x => x.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(x =>
    x
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(x => x[0].match(/[aeiou]/gi) !== null);
};

const removeSpaces = string => {
  // your code here
  return string.replaceAll(' ', '');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((partialSum, x) => partialSum + x);
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
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
