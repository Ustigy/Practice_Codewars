function findOutlier(integers){
  let evenArray = [];
  let oddArray = [];
  
  for (let number of integers) {
    if (number % 2 === 0) evenArray.push(number);
    else oddArray.push(number);
  }
  
  return (evenArray.length > oddArray.length) ? +oddArray : +evenArray;
}