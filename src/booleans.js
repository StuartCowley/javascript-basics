function negate(a) {
  // your code here
  return !(a > 0);
};

function both(a, b) {
  // your code here
  return a > 0 && b > 0;
};

function either(a, b) {
  // your code here
  return a > 0 || b > 0;
};

function none(a, b) {
  // your code here
  return !(a > 0 || b > 0);
};

function one(a, b) {
  // your code here
  if (a > 0 && b > 0) {
    return false;
  }
  return a > 0 || b > 0;
};
  


function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  // your code here
  return Boolean(a === b);
};

function isGreaterThan(a, b) {
  // your code here
  return Boolean(a > b);
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return Boolean(a <= b);
};

function isOdd(a) {
  // your code here
  return Boolean(a % 2);
};

function isEven(a) {
  // your code here
  return Boolean(a % 2 == 0);
};

function isSquare(a) {
  // your code here
  if (a < 0) return false;
  return Boolean(Math.sqrt(a) % 1 === 0);
};

function startsWith(char, string) {
  // your code here
  if (string.startsWith(char)) return true;
  return false;
};

function containsVowels(string) {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length; i += 1) {
    if (vowels.includes(string[i])) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  // your code here
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

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
