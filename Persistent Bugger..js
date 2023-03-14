function persistence(num) {
  let count = 0;
  
  while (num > 9) {
    num = Array.from(String(num));
    num = num.reduce((sum, el) => sum * el, 1);
    count++;
  }
  
  return count;
}