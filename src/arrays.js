const getNthElement = (index, array) => {
  if (index > array.length -1) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let arr = array.splice(array.length, 0, element);
  return arr;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
  };

const numbersToStrings = numbers => {
  let arr = numbers.map((item) => {
    return item.toString();
  });
  return arr;
};

const uppercaseWordsInArray = strings => {
  let arr = strings.map((item) => {
    return item.toUpperCase();
  });
  return arr;
};

const reverseWordsInArray = strings => {
  let arr = strings.map((item) => {
    return item.split('').reverse().join('');
  });
  return arr;
};

const onlyEven = numbers => {
 let arr = numbers.filter((item) => {
   return item % 2 === 0;
  });
  return arr;
};

const removeNthElement2 = (index, array) => {
  array.splice(index, 1);
  return array.splice();
  };

const elementsStartingWithAVowel = strings => {
  let arr = strings.filter((items) => {
  return items[0].includes('a') || items[0].includes('A') || items[0].includes('e') || items[0].includes('E') || items[0].includes('i') || items[0].includes('I') || items[0].includes('o') || items[0].includes('O') || items[0].includes('u') || items[0].includes('U')
  });
  return arr; 
};

const removeSpaces = string => {
  let str = string.split(' ').join('');
  return str;
};

const sumNumbers = numbers => {
  let arr = numbers.reduce((total, item) => {
    return item + total;
  }, 0);
  return arr;
};

const sortByLastLetter = strings => {
  let arr = strings.sort((a, b) => {
    return a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1);
  });
  return arr;
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
