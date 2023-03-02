var countBits = function(n) {
  let nBi = n.toString(2);
  
  let pos = 0;
  let count = 0;
  while (true) {
    let foundPos = nBi.indexOf('1', pos);
    if (foundPos === -1) break;
    pos = foundPos + 1;
    count++;
  }
  return count;
};