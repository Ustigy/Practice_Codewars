let dontGiveMeFive = (start, end) => {

  let row = [];
  for (let i = start; i <= end; i++){
    row.push(i);
  }

  let rowFiltered = [];
  for (let prop of row) {
    let valueFiltered = String(prop).split('').filter(el => el != 5).join('');
    if (+valueFiltered === prop) rowFiltered.push(prop);
  }
  
  return rowFiltered.length;
}