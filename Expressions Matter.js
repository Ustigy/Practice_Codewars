function expressionMatter(a, b, c) {
 
  let sum1 = a * b * c;
  let sum2 = a + b + c;
  let sum3 = ( a + b ) * c;
  let sum4 = a * (b + c);
  let sum5 = a + b * c;
  let sum6 = a * b + c;
  
  return (Math.max (sum1, sum2, sum3, sum4, sum5, sum6));
}