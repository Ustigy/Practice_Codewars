function order(words){ 
  let arr = words.split(' ');
  
  let arrSort = Array(arr.length);
  
  for (let prop of arr) {
    let index = prop.split('').filter(el => el / 1 );
    arrSort.splice(index - 1, 1, prop);
  }

  return arrSort.join(' ');
}