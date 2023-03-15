var uniqueInOrder=function(iterable){
  iterable = Array.from(iterable);
  console.log(iterable)
  let obj = {};
  
  for (let i = 0; i < iterable.length; i++) {
   
    if (iterable[i] in obj && obj[iterable[i]] === obj[iterable[i+1]]) {
      obj[iterable[i]]++;
    } else {
      obj[iterable[i]] = 1;
    }
    
  console.log(obj)
  }
  return obj;
}