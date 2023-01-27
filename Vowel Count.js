function getCount(str) {
  
  let sumVowel = 0;

  for (let key of str) {
    if (key === 'a' || key === 'e' || key === 'i' || key === 'o' || key === 'u') {
      sumVowel++;
    }
  }

  return sumVowel;
}