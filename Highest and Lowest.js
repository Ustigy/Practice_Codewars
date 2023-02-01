function highAndLow(numbers){
  let arr = numbers.split(' ');

  let arrNumbers = arr.map (function (value) {
    return Number(value);
  })

  let maxNumber = Math.max(...arrNumbers);
  let minNumber = Math.min(...arrNumbers);
  
  return `${maxNumber} ${minNumber}`;
}