function spinWords(string){
  let arr = string.split(' ');
  let revArr = [];
  
  for (let word of arr) {
    if (word.length >= 5) {
      word = revStr(word);
    }
    revArr.push(word)
  }
   return revArr.join(' ');
}


function revStr(str) {
  let reverseStr = '';
  for (let i = -1; i >= -str.length; i--) {
    reverseStr += str.at(i);
  }
  return reverseStr;
}