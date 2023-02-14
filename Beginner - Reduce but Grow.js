function grow(x){
  let result = 1;
  
  for (let number of x) {
    result *= number;
  }
  
  return result;
}