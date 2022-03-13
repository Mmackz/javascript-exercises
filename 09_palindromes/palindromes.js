const palindromes = function (str) {
   const filtered = [...str].filter((char) => /[a-z]/i.test(char));
   return filtered.reverse().join("") === filtered.join("");
};

// Do not edit below this line
module.exports = palindromes;

// pseudocode

//   - strip string of non-alpahbet characters and spaces
//  - convert into lowercase
//  - reverse string and compare
