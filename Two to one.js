function longest(s1, s2) {
  let arr = [];
  
  for (let letter of s1) {
    if (arr.indexOf(letter) === -1) arr.push(letter)
  }
  
  for (let letter of s2) {
    if (arr.indexOf(letter) === -1) arr.push(letter)
  }

  return arr.sort().join('');
}