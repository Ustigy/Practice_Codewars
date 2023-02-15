function SeriesSum(n) {
  let sum = 0;
  let denominator = 1;
   
  for (let i = 1; i <= n; i++) {
    sum = sum + 1/denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}