function add (a, b) {
  // your code here
  return a + b;
}

function subtract (a, b) {
  // your code here
  return a - b;
}

function multiply (a, b) {
  // your code here
  return a * b;
}

function divide (a, b) {
  // your code here
  return a / b;
}

function power (a, b) {
  // your code here
  return a ** b;
}

function round (a) {
  // your code here
  return Math.round(a);
}

function roundUp (a) {
  // your code here
  return Math.ceil(a);
}

function roundDown (a) {
  // your code here
  return Math.floor(a);
}

function absolute (a) {
  // your code here
  return Math.abs(a);
}

function quotient (a, b) {
  // your code here
  let quotient2 = Math.floor(a / b);
  if (a <0 && b >0 || a > 0 && b < 0) {
     quotient2 += 1;
  }
  return quotient2;
}

function remainder (a, b) {
  // your code here
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
