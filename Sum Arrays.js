// Sum Numbers
function sum (numbers) {
  "use strict";

  let sumNumbers = numbers.reduce (function (curentSum, curentNumber) {
      return curentSum + curentNumber;
  }, 0)
  
  return sumNumbers;                 
};