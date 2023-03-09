function arrayDiff(a, b) {

  let arrayDiff;
  for (let valueB of b) {
    if (valueB === undefined) return a;
    arrayDiff = a.filter(valueA => valueA !== valueB)
  }  
  
  return arrayDiff;
}