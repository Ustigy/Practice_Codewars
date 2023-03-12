function arrayDiff(a, b) {
  for (let valueB of b) {
    a = a.filter(valueA => valueA !== valueB);
  }  
  
  return a;
}