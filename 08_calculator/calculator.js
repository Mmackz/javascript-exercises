const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => b + a, 0)
};

const multiply = function(arr) {
   return arr.reduce((a, b) => b * a);
};

const power = function(num, pow) {
	return num**pow;
};

const factorial = function(num) {
   if (num == 1) {
      return 1
   }

   return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
