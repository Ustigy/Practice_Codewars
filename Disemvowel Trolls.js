function disemvowel(str) {
  let arr = Array.from(str);
  let nArr = arr.filter(item => item != 'e'
                             && item != 'u' 
                             && item != 'i' 
                             && item != 'o'
                             && item != 'a'
                             && item != 'E'
                             && item != 'U' 
                             && item != 'I' 
                             && item != 'O'
                             && item != 'A');
  return nArr.join('');
}