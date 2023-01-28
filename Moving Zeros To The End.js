function moveZeros(arr) {
  let arrZero = arr.filter (value => value === 0); 
  arr = arr.filter(value => value !== 0);

  arr = arr.concat(arrZero);
  
  return arr;
}