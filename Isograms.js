function isIsogram(str){
  let obj = {};
  
  for (let letter of str) {
    letter = letter.toLowerCase();
    
    if (obj[letter]) return false;
    obj[letter] = 1;
  }
  
  return true;
}