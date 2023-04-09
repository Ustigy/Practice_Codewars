function openOrSenior(data){
  let arrResault = [];
  
  for (let prop of data) {
    if (prop[0] >= 55 && prop[1] > 7) {
      arrResault.push('Senior');
    } else {
      arrResault.push('Open');
    }
  }
  
  return arrResault;
}