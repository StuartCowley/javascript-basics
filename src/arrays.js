const getNthElement = (index, array) => {
  return array[index % array.length]; //I get it, kind of. Just not 100%. Need to think a bit more. Maths stuff.
};

const arrayToCSVString = array => {
  return array.toString(array); //Easy.
};

const csvStringToArray = string => {
  return string.split(`,`); //Splits the characters using what was given. Easy.
};

const addToArray = (element, array) => {
  array.push(element); //Add the element select to whatever array selected. Easy.
};

const addToArray2 = (element, array) => {
  return array.concat(element); //If you want to add the items of one array to another array. Essentially - firstArray.concat(secondArray):
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1); //I understood the splice function. Failed with the second paramter - for future note, the 2nd parameter means it removes one item only. 1 means remove only 1.
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());; //.map creates a new array. This one uses a callbackFn to add values to new array. Still fuzzy, but works.
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase()); //SAme as above. Easy, now that you know....
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join("")) //This worked somehow creating a new array with map. FCC has good article on this but didn't use .map.
};

const onlyEven = numbers => {
  return numbers.filter(n => n % 2 === 0) //filter creates new element with all numbers that pass the parameter arrow function. Easy enough.
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
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
