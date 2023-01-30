function invert(array) {
  let invertArray = [];
  
  array.forEach(function (number) {
    invertArray.push(-number);
  })
  
  return invertArray;
}