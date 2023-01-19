function positiveSum(arr) {
  let sum = 0;
  
  for (let value of arr) {
    if (value > 0) sum = sum + value;
  }
  
  return sum;
  
}