
function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b; 
};

function none(a, b) {
  if (a === false && b === false) {
    return true;
  } else {
    return false;
  }
};

function one(a, b) {
  if (a === true && b === false) {
    return true;
  } else if (a === false && b === true) {
    return true;
  } else {
    return false;
  }
};

function truthiness(a) {
  return Boolean(a);
}; 

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  if (a % 2 == 1 ) {
    return true; 
  } else {
    return false;
  }
};

function isEven(a) {
  if (a % 2 == 0 ) {
    return true; 
  } else {
    return false;
  }
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  if (string[0] === char) {
    return true; 
  } else {
    return false;
  }
};

function containsVowels(string) {
  let pattern = /[aeiou]/i;
  return pattern.test(string);
};

function isLowerCase(string) {
  if ( string == string.toLowerCase()){
    return true;
  } else {
    return false;
  }
};

module.exports = {                
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};