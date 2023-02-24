function alphabetPosition(text) {
  let stringPosition = '';
  
  for (let letter of text) {
    letter = letter.toLowerCase();
    let codeLetter = letter.codePointAt(0);
    
    if (codeLetter < 97 || codeLetter > 122 || letter === ' ') continue;
    
    stringPosition += (codeLetter - 96) + ' ';
        
  }
  return stringPosition.trim();
}