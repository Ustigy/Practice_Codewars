var uniqueInOrder=function(iterable){
  iterable = Array.from(iterable);

  for (let i = 0; i < iterable.length; i++) {
    
    let amountRepeat = 0;
    for (let j = i + 1; iterable[i] === iterable[j]; j++) {
      amountRepeat++;
    }
    
    iterable.splice(i, amountRepeat);
  }
  
  return iterable;
}