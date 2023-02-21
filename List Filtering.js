function filter_list(l) {
  let filterArray = [];
  
  for (let value of l) {
    if (typeof(value) !== 'string') filterArray.push(value);
  }

  return filterArray;
}