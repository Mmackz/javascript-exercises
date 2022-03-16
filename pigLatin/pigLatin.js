function pigLatin(string) {
   const words = string.split(" ");
   const mapped = words.map((word) => {
      const indexOfVowel = word.search(/^[aeiou]/);
      if (indexOfVowel === 0) {
         return `${word}ay`;
      }
      return `${word.slice(indexOfVowel)}${word.slice(0, indexOfVowel)}ay`;
   });
   return mapped.join(" ");
}

// Do not edit below this line
module.exports = pigLatin;
