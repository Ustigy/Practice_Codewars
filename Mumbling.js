function accum(s) {
  let sAccum = '';
  
	for (let index = 0; index < s.length; index++) {
    sAccum += s[index].toUpperCase();
    
    for (let amount = 2; amount <= index + 1; amount++) {
      sAccum += s[index].toLowerCase();
    }
    
    if (index < s.length - 1) sAccum += '-';

  }
  return sAccum;
}