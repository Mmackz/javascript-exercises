const caesar = function(str, offset) {

   while (offset < 0) {
     offset = 26 + offset % 26;
   }
   offset = offset % 26;
 
   return [...str].map((char) => {
      if (/[a-z]/i.test(char)) {
        const charCode = char.charCodeAt(0)
         if (charCode >= 97) {
           if (charCode + offset > 122) {
             return String.fromCharCode(charCode + offset - 26);
           } else {
             return String.fromCharCode(charCode + offset)
           }
         } else {
           if (charCode + offset > 90) {
             return String.fromCharCode(charCode + offset - 26);
           } else {
             return String.fromCharCode(charCode + offset)
           }
         }
      } else {
         return char;
      }
   }).join("");
 };

// Do not edit below this line
module.exports = caesar;


/*
  - 65 for UPPERCASE (65 - 90)
  - 97 for lowercase (97 - 122)

  offset is -50
  -1 -2 -3 -4 -5
  A Z Y X W V

  Take letter (B 66 % 65 = 1) . 1 - 5 = 4, 25 - 4 = 22 V

  if less than 65, subtract from upper ceiling (90)


*/
