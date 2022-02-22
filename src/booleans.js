const negate = (a) => {
  return !(a);
};

const both = (a, b) => {
  return (a && b);
};

const either = (a, b) => {
  return (a || b);
};

const none = (a, b) => {
  return !(a || b)
};

const one = (a, b) => {
  return ((a && !b) || (!a && b));
};

const truthiness = (a) => {
  if (a) {
    return true
  } else {
    return false
  }
};

const isEqual = (a, b) => {
  return (a === b);
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
