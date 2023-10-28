function negate(a) {
  return !a;
};

function both(a, b) {
  return a&&b
};

function either(a, b) {
  return a||b
};

function none(a, b) {
  return !a&&!b
};

function one(a, b) {
  return (a&&!b || !a&b)? true:false;
};

function truthiness(a) {
  return a? true: false;
};

function isEqual(a, b) {
  return a===b
};

function isGreaterThan(a, b) {
  return a>b
};

function isLessThanOrEqualTo(a, b) {
  return a<=b
};

function isOdd(a) {
  return a%2!=0
};

function isEven(a) {
  return a%2===0
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a))

};

function startsWith(char, string) {
  // your code here
  return string.charAt(0) === char
};

function containsVowels(string) {
  // your code here
  return /[aeiou]/gi.test(string);
};

function isLowerCase(string) {
  // your code here
  return !/[ABDCDEFGHIJKLMNOPQRSTUVWXYZ]/g.test(string);

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
