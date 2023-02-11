function XO(str) {
  let quantityX = 0;
  let quantityO = 0;
  
  for (let letter of str) {
    if (letter === 'x'|| letter === 'X') quantityX++;
    else if (letter === 'o' || letter === 'O') quantityO++;
  }
  
  return (quantityX === quantityO);
}