function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a && b;
};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !a && !b;
};

function one(a, b) {
  // your code here
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  // your code here
  if (a === 0 || Number.isNaN(a) || a === null || a === undefined || a === '') {
    return false;
  }

  return true;
};

function isEqual(a, b) {
  // your code here
};

function isGreaterThan(a, b) {
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  // your code here
};

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
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
