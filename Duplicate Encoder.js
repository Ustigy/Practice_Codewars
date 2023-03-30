function duplicateEncode(word){
  word = word.toLowerCase();
  
  let obj = {};
  let result = '';
  
  for (let prop of word) {
    if (obj[prop]) {
      obj[prop] += 1;
    } else {
    obj[prop] = 1;
    }
  }
  
  for (let key of word) {
    if (obj[key] === 1) {
      result += '(';
    } else {
      result += ')';
    }
  }

  return result;
}