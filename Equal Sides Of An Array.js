function findEvenIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sumLeft += arr[i];
    
    while (sumLeft !== sumRight) {
      for (let j = -1; j >= -arr.length; j--) {
        sumRight += arr.at(j);
      }
    }
  
  }
  
  return sumRight
}