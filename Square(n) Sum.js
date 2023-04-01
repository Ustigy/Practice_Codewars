function squareSum(numbers){
  return numbers.reduce((accum, current) => accum + current * current, 0);
}