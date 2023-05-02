const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return String(array);
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
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  const numString = numbers.toString();
  const splitString = numString.split(',');
  return splitString;
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(words => words.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(words =>
    words
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(nums => nums % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  const copy = [...array];
  copy.splice(index, 1);
  return copy;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(words => /^[aeiou]/i.test(words));
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('');
  
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((sum, number) => sum + number, 0);
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((a, b) => {
    const lastA = a.charAt(a.length - 1);
    const lastB = b.charAt(b.length - 1);
    return lastA.localeCompare(lastB);
  });
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
