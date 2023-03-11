function duplicateCount(text){
  text = text.toLowerCase();

  let count = {};
  for (let letter of text) {
    if (`${letter}` in count) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  };
  
  let sum = 0;
  for (let value in count) {
    if (count[value] > 1) sum++;
  }

  return sum;
}