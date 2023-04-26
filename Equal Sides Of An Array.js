function findEvenIndex(arr) {
  
  if (arr.reduce((sum, el) => sum + el, 0) === 0) {
    return 0;
  }
  
  let i;
  for (i = 1; i < arr.length; i++) {
    
    let leftSum = 0;
    for (let jLeft = 0; jLeft < i; jLeft++) {
      leftSum += arr[jLeft];
    }
    
    let rightSum = 0;
    for (let jRight = arr.length - 1; jRight > i; jRight--) {
      rightSum += arr[jRight];
    }

    if (leftSum === rightSum) break;
    if (rightSum === 0 && leftSum !== rightSum) i = -1;
  }

    return i;
}
