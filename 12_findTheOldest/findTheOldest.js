const findTheOldest = function (arr) {
   const currentYear = new Date().getFullYear();
   const ages = arr
      .map((person) => ({
         name: person.name,
         age: (person.yearOfDeath ?? currentYear) - person.yearOfBirth
      }))
      .sort((a, b) => b.age - a.age);
   return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
