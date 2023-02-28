function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  return a!==b;
}

function truthiness(a) {
  if (a) {return true}
  if (!a) {return false}
};

function isEqual(a, b) {
  return a===b
};

function isGreaterThan(a, b) {
  return a>b
};

function isLessThanOrEqualTo(a, b) {
  return a <= b
};

function isOdd(a) {
  if (a % 2 !== 0) {return true}
  else {return false}
};

function isEven(a) {
  if (a % 2 == 0) {return true}
  else {return false}
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a))
};

function startsWith(char, string) {
  if (char == string.charAt(0)) {return true}
  else {return false}
};

function containsVowels(string) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i +=1) {
    const vowel = vowels[i]; 
  if (string.toLowerCase().includes(vowel)) {
    return true
  }
}
return false
}

function isLowerCase(string) {
  if (string == string.toLowerCase()) {return true}
  else {return false}
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
