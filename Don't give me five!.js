let dontGiveMeFive = (start, end) => {
  console.log(start, end)
  let row = '';
  
  for (let i = start; i < end; i++) {
    row += i + ',';
  } row = row + end;
  row = row.split(',');
  console.log(row);
   
  let firstFive = 0;
  for (let key of row) {
    if (key % 5 !== 0 || key % 10 === 0) {
      firstFive = Number(key) + 1;
    } else {
      break;
    }
  }
  console.log(firstFive)

  let quantityFive = 0;
  for (let j = firstFive; j <= end; j += 10) {
    quantityFive++;
  }
     console.log(quantityFive) 
     console.log(row.length - quantityFive)
  return (row.length - quantityFive)
}













