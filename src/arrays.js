const getNthElement = (index, array) => {
  // your code here
  while (index>=array.length){
    index = index - array.length
  }
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString()
};

const csvStringToArray = string => {
  // your code here
  return string.split(',')
};

const addToArray = (element, array) => {
  // your code here
  array.push(element)
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element)
 

};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1)

};

const numbersToStrings = numbers => {
  // your code here
  return numbers.join().split(',')
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map((word)=>word.toUpperCase())
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word=>word.split('').reverse().join(''))
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(num=>num%2===0)
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter(item=>array.indexOf(item)!=index)
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(word=>word.charAt(0)=='a'|| word.charAt(0)=='e' || word.charAt(0)=='i' || word.charAt(0)=='o' || word.charAt(0)=='u')
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('')
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a,b)=>a+b,0)
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
