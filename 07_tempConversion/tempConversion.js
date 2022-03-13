const ftoc = function(temp) {
   return +parseFloat((temp -32) * 0.5556).toFixed(2);
};

const ctof = function(temp) {
   return +parseFloat(temp * 1.8 + 32).toFixed(2);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
