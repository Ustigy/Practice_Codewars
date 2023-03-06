function narcissistic(value) {
  let str = value.toString();
  
  let data = [];
  for (let number of str) {
    data.push(number ** str.length);
  }
  
  return (value === data.reduce((a, b) => a + b));
}