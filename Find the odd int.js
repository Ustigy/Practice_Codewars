function findOdd(A) {
  let count = {};
  
  for (let elem of A) {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }
  }
  
  for (let key in count) {
    if (count[key] % 2 !== 0) return +key;
  }
  
}