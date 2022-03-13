const fibonacci = function (n) {
   return Math.round(
      (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) /
         Math.sqrt(5)
   );
};

// Do not edit below this line
module.exports = fibonacci;
